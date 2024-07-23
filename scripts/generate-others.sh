#!/usr/bin/env bash
set -eu

OPENAPI_GENERATOR_CLI=./node_modules/.bin/openapi-generator-cli

# Use released versions
KUBEVIRT_RELEASE=release-1.3
CDI_RELEASE=v1.59.0
KUBERNETES_RELEASE=release-1.30

GENERATOR=typescript-fetch

## -----------------------------------------------------------
## Fetch OpenAPI declaration files and process them

# Download swagger openapi specs
curl https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubevirt.json
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json -o swagger-containerized-data-importer.json
curl https://raw.githubusercontent.com/kubernetes/kubernetes/${KUBERNETES_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubernetes.json

# Patch missing creationTimestamp in swagger file
git apply ./scripts/creationTimestamp.patch

# Generate TypeScript types
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubevirt.json -g ${GENERATOR} -o ./generated/kubevirt/${KUBEVIRT_RELEASE}/ --skip-validate-spec --type-mappings=Date=string
${OPENAPI_GENERATOR_CLI} generate -i swagger-containerized-data-importer.json -g ${GENERATOR} -o ./generated/containerized-data-importer/${CDI_RELEASE}/ --skip-validate-spec --type-mappings=Date=string
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubernetes.json -g ${GENERATOR} -o ./generated/kubernetes/${KUBERNETES_RELEASE}/ --skip-validate-spec --type-mappings=Date=string

# Create disk folders
mkdir -p ./kubevirt
mkdir -p ./containerized-data-importer
mkdir -p ./kubernetes

# Copy models to dist folders
cp -rf ./generated/kubevirt/${KUBEVIRT_RELEASE}/* ./kubevirt/
cp -rf ./generated/containerized-data-importer/${CDI_RELEASE}/* ./containerized-data-importer/
cp -rf ./generated/kubernetes/${KUBERNETES_RELEASE}/* ./kubernetes/

## -----------------------------------------------------------
## Fixes for bad generated code from typescript-fetch generator
## Specific for current releases

