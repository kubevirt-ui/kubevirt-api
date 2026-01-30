#!/usr/bin/env bash
# Common variables and functions shared across generation scripts

set -eu

# Get the root directory of the project (parent of scripts/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Tool paths
OPENAPI_GENERATOR_CLI="${ROOT_DIR}/node_modules/.bin/openapi-generator-cli"

# Release versions
KUBEVIRT_RELEASE=main
CDI_RELEASE=main
KUBERNETES_RELEASE=v1.33.0
OPENSHIFT_CONSOLE_COMMIT=main
NMSTATE_RELEASE=v0.84.0

# Generator settings
GENERATOR=typescript-fetch

# Directories
GENERATED_DIR="${ROOT_DIR}/generated"

# Error handler function
error_handler() {
    echo "Error occurred in script at line: ${BASH_LINENO[0]}"
    echo "Command: '${BASH_COMMAND}'"
    exit 1
}

# Set up error handling
trap 'error_handler' ERR

# Function to download a swagger file
download_swagger() {
    local url="$1"
    local output="$2"
    echo "Downloading ${output}..."
    curl -s "${url}" -o "${ROOT_DIR}/${output}"
}

# Function to generate TypeScript types from swagger
generate_typescript() {
    local input="$1"
    local output_dir="$2"
    echo "Generating TypeScript types from ${input}..."
    ${OPENAPI_GENERATOR_CLI} generate \
        -i "${ROOT_DIR}/${input}" \
        -g ${GENERATOR} \
        -o "${output_dir}" \
        --skip-validate-spec \
        --type-mappings=Date=string
}

# Function to copy generated files to dist folder
copy_to_dist() {
    local source="$1"
    local dest="$2"
    echo "Copying generated files to ${dest}..."
    mkdir -p "${dest}"
    cp -rf "${source}"/* "${dest}/"
}

# Function to apply ignoreDiscriminator fix
fix_ignore_discriminator() {
    local models_dir="$1"
    echo "Fixing ignoreDiscriminator in ${models_dir}..."
    sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" "${models_dir}"/*
}

# Function to apply Date type fix
fix_date_type() {
    local models_dir="$1"
    echo "Fixing Date type in ${models_dir}..."
    sed -i "s/.toISOString()//g" "${models_dir}"/*
    sed -i "s/new Date\((json\['.*'\])\)/\1/g" "${models_dir}"/*
}

echo "Common variables loaded from: ${SCRIPT_DIR}"
