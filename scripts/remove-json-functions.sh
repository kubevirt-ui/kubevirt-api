#!/usr/bin/env bash
# Script to remove ToJSON, FromJSON, and FromJSONTyped functions and their imports
# Usage: ./scripts/remove-json-functions.sh <target_folder>

set -eu

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="${1:-.}"

node "${SCRIPT_DIR}/remove-json-functions.js" "$TARGET_DIR"
