#!/usr/bin/env bash
# Main orchestrator script that calls all individual generation scripts
# Each script can also be run independently

set -eu

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=========================================="
echo "Starting full API generation"
echo "=========================================="

# Make all scripts executable
chmod +x "${SCRIPT_DIR}/generate-kubevirt.sh"
chmod +x "${SCRIPT_DIR}/generate-cdi.sh"
chmod +x "${SCRIPT_DIR}/generate-kubernetes.sh"
chmod +x "${SCRIPT_DIR}/generate-console.sh"
chmod +x "${SCRIPT_DIR}/generate-nmstate.sh"

# Generate KubeVirt types
"${SCRIPT_DIR}/generate-kubevirt.sh"

# Generate CDI types
"${SCRIPT_DIR}/generate-cdi.sh"

# Generate Kubernetes types
"${SCRIPT_DIR}/generate-kubernetes.sh"

# Generate Console types
"${SCRIPT_DIR}/generate-console.sh"

# Generate NMState types
"${SCRIPT_DIR}/generate-nmstate.sh"

echo "=========================================="
echo "All API types generated successfully!"
echo "=========================================="
