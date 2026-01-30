#!/usr/bin/env bash
# Generate KubeVirt TypeScript types
# Can be run independently or via generate.sh orchestrator

set -eu

# Source common variables and functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/common.sh"

echo "=== Generating KubeVirt types ==="

# Download swagger file
download_swagger \
    "https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json" \
    "swagger-kubevirt.json"

# Fix creationTimestamp in swagger file
chmod +x "${SCRIPT_DIR}/fix-timestamp.sh"
"${SCRIPT_DIR}/fix-timestamp.sh"

# Fix k8s.io.apimachinery.pkg.api.resource.Quantity in swagger file
chmod +x "${SCRIPT_DIR}/fix-k8s-quantity.sh"
"${SCRIPT_DIR}/fix-k8s-quantity.sh"

# Generate TypeScript types
generate_typescript \
    "swagger-kubevirt.json" \
    "${GENERATED_DIR}/kubevirt/${KUBEVIRT_RELEASE}"

# Copy to dist folder
copy_to_dist \
    "${GENERATED_DIR}/kubevirt/${KUBEVIRT_RELEASE}" \
    "${ROOT_DIR}/kubevirt"

# Apply post-generation fixes
fix_ignore_discriminator "${ROOT_DIR}/kubevirt/models"
fix_date_type "${ROOT_DIR}/kubevirt/models"

# Apply global fetch fix patch if applicable
if git apply --check "${SCRIPT_DIR}/globalFetchFix.patch" 2>/dev/null; then
    git apply "${SCRIPT_DIR}/globalFetchFix.patch"
    echo "Applied globalFetchFix.patch"
fi

# Fix broken comments
chmod +x "${SCRIPT_DIR}/fix-comments-parsing-errors.sh"
"${SCRIPT_DIR}/fix-comments-parsing-errors.sh"

echo "=== KubeVirt types generated successfully ==="
