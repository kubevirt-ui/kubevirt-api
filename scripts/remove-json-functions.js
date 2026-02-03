#!/usr/bin/env node
/**
 * Script to remove ToJSON, FromJSON, and FromJSONTyped functions and their imports/usages
 * Usage: node scripts/remove-json-functions.js <target_folder>
 */

import fs from 'fs';
import path from 'path';

const targetDir = process.argv[2] || '.';

if (!fs.existsSync(targetDir)) {
    console.error(`Error: Directory '${targetDir}' does not exist`);
    process.exit(1);
}

console.log(`=== Removing JSON functions from: ${targetDir} ===`);

/**
 * Recursively find all .ts files in a directory
 */
function findTsFiles(dir) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...findTsFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.ts')) {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * Remove JSON function definitions and instanceOf functions from a TypeScript file
 */
function removeFunctionDefinitions(content) {
    // Pattern to match function definitions:
    // - ending with ToJSON, FromJSON, or FromJSONTyped
    // - starting with instanceOf
    const functionPattern = /export function (\w+(ToJSON|FromJSON|FromJSONTyped)|instanceOf\w+)\([^)]*\)[^{]*\{/g;

    // Find all function starts
    let match;
    const functionStarts = [];

    functionPattern.lastIndex = 0;
    while ((match = functionPattern.exec(content)) !== null) {
        functionStarts.push(match.index);
    }

    // Process functions from end to start to preserve indices
    for (let i = functionStarts.length - 1; i >= 0; i--) {
        const startIndex = functionStarts[i];

        // Find the matching closing brace
        let braceCount = 0;
        let inFunction = false;
        let endIndex = startIndex;

        for (let j = startIndex; j < content.length; j++) {
            const char = content[j];
            if (char === '{') {
                braceCount++;
                inFunction = true;
            } else if (char === '}') {
                braceCount--;
                if (inFunction && braceCount === 0) {
                    endIndex = j + 1;
                    break;
                }
            }
        }

        // Remove the function (including any trailing newlines)
        let removeEnd = endIndex;
        while (removeEnd < content.length && content[removeEnd] === '\n') {
            removeEnd++;
        }

        content = content.slice(0, startIndex) + content.slice(removeEnd);
    }

    return content;
}

/**
 * Remove import lines containing JSON functions
 */
function removeImportLines(content) {
    // Remove import lines containing ToJSON, FromJSON, or FromJSONTyped
    const importLinePattern = /^[ \t]+\w+(ToJSON|FromJSON|FromJSONTyped),?\s*$/gm;
    content = content.replace(importLinePattern, '');

    // Clean up empty lines in import blocks
    content = content.replace(/import \{[\s,]*\} from ['"][^'"]+['"];?\s*/g, '');

    // Clean up trailing commas before closing brace in imports
    content = content.replace(/,(\s*)\}/g, '$1}');

    return content;
}

/**
 * Replace JSON function calls with simpler alternatives in API files
 * - SomeTypeToJSON(value) -> value
 * - SomeTypeFromJSON(value) -> value as SomeType
 */
function replaceFunctionCalls(content) {
    // Replace ToJSON calls: SomeTypeToJSON(expression) -> expression
    // This handles: body: V1alpha1MigrationPolicyToJSON(requestParameters.body)
    content = content.replace(/\w+ToJSON\(([^)]+)\)/g, '$1');

    // Replace FromJSON calls in JSONApiResponse callbacks:
    // (jsonValue) => V1alpha1MigrationPolicyFromJSON(jsonValue) -> (jsonValue) => jsonValue
    content = content.replace(/\((\w+)\)\s*=>\s*\w+FromJSON\(\1\)/g, '(jsonValue) => jsonValue');

    // Replace standalone FromJSON calls: SomeTypeFromJSON(value) -> value
    content = content.replace(/\w+FromJSON\(([^)]+)\)/g, '$1');

    return content;
}

/**
 * Process a TypeScript file
 */
function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Remove function definitions
    content = removeFunctionDefinitions(content);

    // Remove import lines
    content = removeImportLines(content);

    // Replace function calls (for API files)
    content = replaceFunctionCalls(content);

    // Clean up multiple consecutive blank lines
    content = content.replace(/\n{3,}/g, '\n\n');

    // Clean up trailing whitespace
    content = content.replace(/[ \t]+$/gm, '');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  Modified: ${filePath}`);
        return true;
    }

    return false;
}

// Find and process all TypeScript files
const tsFiles = findTsFiles(targetDir);
let modifiedCount = 0;

for (const file of tsFiles) {
    if (processFile(file)) {
        modifiedCount++;
    }
}

console.log(`=== Processed ${tsFiles.length} files, modified ${modifiedCount} ===`);
