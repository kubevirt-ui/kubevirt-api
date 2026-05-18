#!/usr/bin/env bash
set -eu

# Define the incorrect and correct import statements
incorrect_import="import { K8sModel as K8sKind } from '@console/dynamic-plugin-sdk/src/api/common-types';"
correct_import="import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';"

# Define the incorrect and correct model types
incorrect_type="K8sKind"
correct_type="K8sModel"

# The file that needs modification
file_path="console-core-models.ts"

# Replace the import statement
sed -i "s|${incorrect_import}|${correct_import}|" "$file_path"

# Replace the model types
sed -i "s|${incorrect_type}|${correct_type}|g" "$file_path"

echo "File has been updated successfully."