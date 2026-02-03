#!/usr/bin/env bash
# Generate OpenShift Console TypeScript models
# Can be run independently or via generate.sh orchestrator

set -eu

# Source common variables and functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/common.sh"

echo "=== Generating Console types ==="

# Download console models file
download_swagger \
    "https://raw.githubusercontent.com/openshift/console/${OPENSHIFT_CONSOLE_COMMIT}/frontend/public/models/index.ts" \
    "console-core-models.ts"

# Fix console models (replace imports and types)
chmod +x "${SCRIPT_DIR}/fix-console-models.sh"
"${SCRIPT_DIR}/fix-console-models.sh"

# Create console directory and copy models
mkdir -p "${ROOT_DIR}/console/core"
cp -f "${ROOT_DIR}/console-core-models.ts" "${ROOT_DIR}/console/core/index.ts"

echo "=== Console types generated successfully ==="
