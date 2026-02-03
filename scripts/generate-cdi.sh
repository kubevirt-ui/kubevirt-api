#!/usr/bin/env bash
# Generate Containerized Data Importer (CDI) TypeScript types
# Can be run independently or via generate.sh orchestrator

set -eu

# Source common variables and functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/common.sh"

echo "=== Generating CDI types ==="

# Download swagger file
download_swagger \
    "https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json" \
    "swagger-containerized-data-importer.json"

# Generate TypeScript types
generate_typescript \
    "swagger-containerized-data-importer.json" \
    "${GENERATED_DIR}/containerized-data-importer/${CDI_RELEASE}"

# Copy to dist folder
copy_to_dist \
    "${GENERATED_DIR}/containerized-data-importer/${CDI_RELEASE}" \
    "${ROOT_DIR}/containerized-data-importer"

# Apply post-generation fixes
fix_ignore_discriminator "${ROOT_DIR}/containerized-data-importer/models"
fix_date_type "${ROOT_DIR}/containerized-data-importer/models"

echo "=== CDI types generated successfully ==="
