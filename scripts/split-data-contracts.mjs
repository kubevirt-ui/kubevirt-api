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

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

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

function printNode(node, sourceFile) {
  return printer
    .printNode(ts.EmitHint.Unspecified, node, sourceFile)
    .split('\n')
    .map((line) => line.replace(/^ {4}/, '  '))
    .join('\n');
}

function getStringLiteralUnionValues(unionType) {
  return unionType.types.map((member) => {
    if (ts.isLiteralTypeNode(member) && ts.isStringLiteral(member.literal)) {
      return member.literal.text;
    }

    throw new Error('Expected string literal union members');
  });
}

function isValidIdentifier(value) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value);
}

function formatEnumPropertyKey(value) {
  return isValidIdentifier(value) ? value : JSON.stringify(value);
}

function capitalizePropertyName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function getPropertyNameText(name) {
  if (ts.isIdentifier(name)) {
    return name.text;
  }
  if (ts.isStringLiteral(name)) {
    return name.text;
  }
  return null;
}

function isStringLiteralUnion(typeNode) {
  return (
    ts.isUnionTypeNode(typeNode) &&
    typeNode.types.length > 0 &&
    typeNode.types.every(
      (member) => ts.isLiteralTypeNode(member) && ts.isStringLiteral(member.literal),
    )
  );
}

function unwrapStringLiteralUnion(typeNode) {
  if (isStringLiteralUnion(typeNode)) {
    return { unionType: typeNode, isArray: false };
  }

  if (ts.isArrayTypeNode(typeNode)) {
    const elementType = typeNode.elementType;
    if (isStringLiteralUnion(elementType)) {
      return { unionType: elementType, isArray: true };
    }
    if (ts.isParenthesizedTypeNode(elementType) && isStringLiteralUnion(elementType.type)) {
      return { unionType: elementType.type, isArray: true };
    }
  }

  return null;
}

function createEnumTypeReference(enumName) {
  return ts.factory.createTypeReferenceNode(enumName, undefined);
}

function replacePropertyType(property, enumName, isArray) {
  const newType = isArray
    ? ts.factory.createArrayTypeNode(createEnumTypeReference(enumName))
    : createEnumTypeReference(enumName);

  return ts.factory.updatePropertySignature(
    property,
    property.modifiers,
    property.name,
    property.questionToken,
    newType,
  );
}

function extractEnumTypesFromMembers(interfaceName, members, sourceFile) {
  const enumTypes = [];

  const updatedMembers = members.map((member) => {
    if (!ts.isPropertySignature(member) || !member.type) {
      return member;
    }

    const propertyName = getPropertyNameText(member.name);
    if (!propertyName) {
      return member;
    }

    const unwrapped = unwrapStringLiteralUnion(member.type);
    if (!unwrapped) {
      return member;
    }

    const enumName = `${interfaceName}${capitalizePropertyName(propertyName)}Enum`;
    enumTypes.push({
      name: enumName,
      unionType: unwrapped.unionType,
      comment: getLeadingCommentText(sourceFile, member),
    });

    return replacePropertyType(member, enumName, unwrapped.isArray);
  });

  return { updatedMembers, enumTypes };
}

function extractEnumTypes(declaration, sourceFile) {
  if (ts.isInterfaceDeclaration(declaration)) {
    const { updatedMembers, enumTypes } = extractEnumTypesFromMembers(
      declaration.name.text,
      declaration.members,
      sourceFile,
    );

    if (!enumTypes.length) {
      return { declaration, enumTypes };
    }

    return {
      declaration: ts.factory.updateInterfaceDeclaration(
        declaration,
        declaration.modifiers,
        declaration.name,
        declaration.typeParameters,
        declaration.heritageClauses,
        updatedMembers,
      ),
      enumTypes,
    };
  }

  if (
    ts.isTypeAliasDeclaration(declaration) &&
    ts.isTypeLiteralNode(declaration.type)
  ) {
    const { updatedMembers, enumTypes } = extractEnumTypesFromMembers(
      declaration.name.text,
      declaration.type.members,
      sourceFile,
    );

    if (!enumTypes.length) {
      return { declaration, enumTypes };
    }

    return {
      declaration: ts.factory.updateTypeAliasDeclaration(
        declaration,
        declaration.modifiers,
        declaration.name,
        declaration.typeParameters,
        ts.factory.updateTypeLiteralNode(declaration.type, updatedMembers),
      ),
      enumTypes,
    };
  }

  return { declaration, enumTypes: [] };
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

function formatEnumConstAndType(name, unionType) {
  const values = getStringLiteralUnionValues(unionType);
  const entries = values
    .map((value) => `  ${formatEnumPropertyKey(value)}: '${value}',`)
    .join('\n');

  return [
    `export const ${name} = {`,
    entries,
    '} as const;',
    '',
    `export type ${name} = typeof ${name}[keyof typeof ${name}];`,
  ].join('\n');
}

function writeTypeAliasFile(outputDir, enumType) {
  const body = formatEnumConstAndType(enumType.name, enumType.unionType);
  const contents = `${enumType.comment}${enumType.comment ? '\n' : ''}${body}\n`;
  fs.writeFileSync(path.join(outputDir, `${enumType.name}.ts`), contents);
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

  const processedDeclarations = [];
  const extractedEnumTypes = new Map();

  for (const declaration of exportedDeclarations) {
    const { declaration: updatedDeclaration, enumTypes } = extractEnumTypes(
      declaration,
      sourceFile,
    );
    processedDeclarations.push(updatedDeclaration);

    for (const enumType of enumTypes) {
      extractedEnumTypes.set(enumType.name, enumType);
    }
  }

  const exportedNames = new Set([
    ...processedDeclarations.map((declaration) => declaration.name.text),
    ...extractedEnumTypes.keys(),
  ]);

  fs.mkdirSync(outputDir, { recursive: true });

  for (const enumType of extractedEnumTypes.values()) {
    writeTypeAliasFile(outputDir, enumType);
  }

  for (const declaration of processedDeclarations) {
    const name = declaration.name.text;
    const comment = getLeadingCommentText(sourceFile, declaration);
    const body = printNode(declaration, sourceFile);
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
