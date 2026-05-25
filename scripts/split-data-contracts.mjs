#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const BUILTIN_TYPES = new Set([
  'string',
  'number',
  'boolean',
  'null',
  'undefined',
  'void',
  'never',
  'any',
  'unknown',
  'object',
  'Record',
  'Array',
  'Readonly',
  'Partial',
  'Required',
  'Pick',
  'Omit',
  'Exclude',
  'Extract',
  'NonNullable',
  'ReturnType',
  'InstanceType',
  'Parameters',
  'ConstructorParameters',
  'Promise',
  'Date',
]);

function getLeadingCommentText(sourceFile, node) {
  const start = node.getStart(sourceFile, false);
  const ranges = ts.getLeadingCommentRanges(sourceFile.text, start);
  if (!ranges?.length) {
    return '';
  }

  return ranges
    .map((range) => sourceFile.text.slice(range.pos, range.end))
    .filter((comment) => !comment.includes('@ts-nocheck'))
    .filter((comment) => !comment.includes('SWAGGER-TYPESCRIPT-API'))
    .filter((comment) => !comment.includes('eslint-disable'))
    .filter((comment) => !comment.includes('tslint-disable'))
    .join('\n');
}

function collectTypeReferences(node) {
  const refs = new Set();

  function visitTypeReference(typeNode) {
    if (!typeNode) {
      return;
    }

    if (ts.isTypeReferenceNode(typeNode)) {
      const name = typeNode.typeName;
      if (ts.isIdentifier(name)) {
        refs.add(name.text);
      } else if (ts.isQualifiedName(name)) {
        refs.add(name.right.text);
      }
    }

    ts.forEachChild(typeNode, visitTypeReference);
  }

  if (ts.isInterfaceDeclaration(node)) {
    for (const member of node.members) {
      if (member.type) {
        visitTypeReference(member.type);
      }
    }
  } else if (ts.isTypeAliasDeclaration(node)) {
    visitTypeReference(node.type);
  }

  return refs;
}

function splitDataContracts(inputPath, outputDir) {
  const sourceText = fs.readFileSync(inputPath, 'utf8');
  const sourceFile = ts.createSourceFile(
    inputPath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  const exportedDeclarations = sourceFile.statements.filter(
    (statement) =>
      (ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement)) &&
      statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword),
  );

  if (!exportedDeclarations.length) {
    throw new Error(`No exported interfaces or types found in ${inputPath}`);
  }

  const exportedNames = new Set(exportedDeclarations.map((declaration) => declaration.name.text));
  fs.mkdirSync(outputDir, { recursive: true });

  for (const declaration of exportedDeclarations) {
    const name = declaration.name.text;
    const comment = getLeadingCommentText(sourceFile, declaration);
    const body = declaration.getText(sourceFile);
    const refs = [...collectTypeReferences(declaration)]
      .filter((ref) => exportedNames.has(ref) && ref !== name && !BUILTIN_TYPES.has(ref))
      .sort();

    const imports =
      refs.length > 0
        ? `${refs.map((ref) => `import type { ${ref} } from './${ref}';`).join('\n')}\n\n`
        : '';

    const contents = `${comment}${comment ? '\n' : ''}${imports}${body}\n`;
    fs.writeFileSync(path.join(outputDir, `${name}.ts`), contents);
  }

  const indexContents = [...exportedNames]
    .sort()
    .map((name) => `export * from './${name}';`)
    .join('\n')
    .concat('\n');

  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContents);
  fs.unlinkSync(inputPath);
}

const [inputPath, outputDir] = process.argv.slice(2);

if (!inputPath || !outputDir) {
  console.error('Usage: split-data-contracts.mjs <data-contracts.ts> <output-dir>');
  process.exit(1);
}

splitDataContracts(path.resolve(inputPath), path.resolve(outputDir));
