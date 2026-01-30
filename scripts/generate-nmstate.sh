#!/usr/bin/env bash
# Generate NMState TypeScript types from CRDs
# Can be run independently or via generate.sh orchestrator

set -eu

# Source common variables and functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/common.sh"

echo "=== Generating NMState types ==="

NMSTATE_PATH="${GENERATED_DIR}/nmstate"
CRDS_PATH="${NMSTATE_PATH}/.crds"

# Create directories
mkdir -p "${NMSTATE_PATH}"
mkdir -p "${CRDS_PATH}"

# Download CRDs
echo "Downloading NMState CRDs..."
curl -s "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nmstates.yaml" -o "${CRDS_PATH}/nmstate.io_nmstates.yaml"
curl -s "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationpolicies.yaml" -o "${CRDS_PATH}/nmstate.io_nodenetworkconfigurationpolicies.yaml"
curl -s "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationenactments.yaml" -o "${CRDS_PATH}/nmstate.io_nodenetworkconfigurationenactments.yaml"
curl -s "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkstates.yaml" -o "${CRDS_PATH}/nmstate.io_nodenetworkstates.yaml"

# Generate OpenAPI spec from CRDs
echo "Generating OpenAPI spec from CRDs..."
"${ROOT_DIR}/node_modules/.bin/crdtoapi" -i "${CRDS_PATH}" -o "${NMSTATE_PATH}/.openapi.yaml"

# Generate TypeScript models using OpenAPI Generator
echo "Generating TypeScript models..."
${OPENAPI_GENERATOR_CLI} generate \
    -i "${NMSTATE_PATH}/.openapi.yaml" \
    -g ${GENERATOR} \
    -o "${NMSTATE_PATH}/" \
    --skip-validate-spec

# Generate models index file
echo "Generating models index..."
find "${NMSTATE_PATH}/models" -name "*.ts" -type f | sed 's|^'"${NMSTATE_PATH}"'/models/||' | sed -e 's/^/export * from ".\//' | sed -e 's/\.ts$/";/' > "${NMSTATE_PATH}/models/index.ts"

# Apply patch fix
echo "Applying NMState patch..."
git apply "${SCRIPT_DIR}/nmstateFix.patch"

# Add custom models export to main index
echo "export * from './custom-models';" >> "${NMSTATE_PATH}/index.ts"

# Copy to dist folder
copy_to_dist "${NMSTATE_PATH}" "${ROOT_DIR}/nmstate"

# Fix nmstate unused vars
chmod +x "${SCRIPT_DIR}/fix-nmstate-unused-vars.sh"
"${SCRIPT_DIR}/fix-nmstate-unused-vars.sh"

echo "=== NMState types generated successfully ==="
