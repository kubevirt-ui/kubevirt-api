#!/usr/bin/env bash
set -eu

OPENAPI_GENERATOR_CLI=./node_modules/.bin/openapi-generator-cli

# Use released versions
KUBEVIRT_RELEASE=release-1.4
CDI_RELEASE=v1.59.0
KUBERNETES_RELEASE=release-1.30
# openshift console latest main commit hash
OPENSHIFT_CONSOLE_COMMIT=master

GENERATOR=typescript-fetch

## -----------------------------------------------------------
## Fetch OpenAPI decleration files and proccess them

# Download swagger openapi specs
curl https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubevirt.json
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json -o swagger-containerized-data-importer.json
curl https://raw.githubusercontent.com/kubernetes/kubernetes/${KUBERNETES_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubernetes.json
curl https://raw.githubusercontent.com/openshift/console/${OPENSHIFT_CONSOLE_COMMIT}/frontend/public/models/index.ts -o console-core-models.ts

# Fix creationTimestamp in swagger file
chmod +x ./scripts/fix-timestamp.sh
./scripts/fix-timestamp.sh

# Generate TypeScript types
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubevirt.json -g ${GENERATOR} -o ./generated/kubevirt/${KUBEVIRT_RELEASE}/ --skip-validate-spec --type-mappings=Date=string
${OPENAPI_GENERATOR_CLI} generate -i swagger-containerized-data-importer.json -g ${GENERATOR} -o ./generated/containerized-data-importer/${CDI_RELEASE}/ --skip-validate-spec --type-mappings=Date=string
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubernetes.json -g ${GENERATOR} -o ./generated/kubernetes/${KUBERNETES_RELEASE}/ --skip-validate-spec --type-mappings=Date=string

# Create disk folder
mkdir -p ./kubevirt
mkdir -p ./containerized-data-importer
mkdir -p ./kubernetes

# Copy models to dist folder
cp -rf ./generated/kubevirt/${KUBEVIRT_RELEASE}/* ./kubevirt/
cp -rf ./generated/containerized-data-importer/${CDI_RELEASE}/* ./containerized-data-importer/
cp -rf ./generated/kubernetes/${KUBERNETES_RELEASE}/* ./kubernetes/
