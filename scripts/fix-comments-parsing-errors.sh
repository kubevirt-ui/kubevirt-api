#!/usr/bin/env bash
set -eu

# List of files to patch
FILES=(
  "kubernetes/models/IoK8sApiAdmissionregistrationV1RuleWithOperations.ts"
  "kubernetes/models/IoK8sApiAuthorizationV1ResourceRule.ts"
  "kubernetes/models/IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations.ts"
  "kubernetes/models/IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations.ts"
  "kubernetes/models/IoK8sApiAdmissionregistrationV1NamedRuleWithOperations.ts"
)

# Function to apply replacements
apply_patches() {
  local file=$1

  echo "Patching ${file}..."

  # General replacements for all files
  sed -i "s/'\*\/scale'/'scale'/g" "$file"
  sed -i "s/'\*\/\*'/'*'/g" "$file"
  sed -i "s/import { exists, mapValues }/import { exists }/g" "$file"
  sed -i "s/^ \* @type {Array<string>}$/  \* @type {Array<string>}/g" "$file"
  sed -i "s/return IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsFromJSONTyped(json, false);/  return IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsFromJSONTyped(json, false);/g" "$file"

  # File-specific replacement for IoK8sApiAuthorizationV1ResourceRule.ts
  if [[ "$file" == "kubernetes/models/IoK8sApiAuthorizationV1ResourceRule.ts" ]]; then
    sed -i "s/\*\/foo/foo/g" "$file"
  fi

  echo "Patched ${file} successfully."
}

# Loop through files and apply the patches
for file in "${FILES[@]}"; do
  if [[ -f "$file" ]]; then
    apply_patches "$file"
  else
    echo "File not found: $file"
  fi
done

echo "All patches applied successfully."