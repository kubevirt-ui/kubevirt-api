#!/usr/bin/env bash
# Generate Kubernetes TypeScript types
# Can be run independently or via generate.sh orchestrator

set -eu

# Source common variables and functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/common.sh"

echo "=== Generating Kubernetes types ==="

# Download swagger file
download_swagger \
    "https://raw.githubusercontent.com/kubernetes/kubernetes/${KUBERNETES_RELEASE}/api/openapi-spec/swagger.json" \
    "swagger-kubernetes.json"

# Generate TypeScript types
generate_typescript \
    "swagger-kubernetes.json" \
    "${GENERATED_DIR}/kubernetes/${KUBERNETES_RELEASE}"

# Copy to dist folder
copy_to_dist \
    "${GENERATED_DIR}/kubernetes/${KUBERNETES_RELEASE}" \
    "${ROOT_DIR}/kubernetes"

# Apply post-generation fixes
fix_ignore_discriminator "${ROOT_DIR}/kubernetes/models"
fix_date_type "${ROOT_DIR}/kubernetes/models"

echo "=== Kubernetes types generated successfully ==="
