#!/usr/bin/env bash
set -eu

OPENAPI_GENERATOR_CLI=./node_modules/.bin/openapi-generator-cli

# Use released versions
KUBEVIRT_RELEASE=v1.5.0
CDI_RELEASE=main
KUBERNETES_RELEASE=v1.33.0
OPENSHIFT_CONSOLE_COMMIT=main

GENERATOR=typescript-fetch

## -----------------------------------------------------------
## Fetch OpenAPI declaration files and process them

# Download swagger openapi specs
curl https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubevirt.json
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json -o swagger-containerized-data-importer.json
curl https://raw.githubusercontent.com/kubernetes/kubernetes/${KUBERNETES_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubernetes.json
curl https://raw.githubusercontent.com/openshift/console/${OPENSHIFT_CONSOLE_COMMIT}/frontend/public/models/index.ts -o console-core-models.ts

# Fix creationTimestamp in swagger file
chmod +x ./scripts/fix-timestamp.sh
./scripts/fix-timestamp.sh

# Fix k8s.io.apimachinery.pkg.api.resource.Quantity in kubevirt swagger file
chmod +x ./scripts/fix-k8s-quantity.sh
./scripts/fix-k8s-quantity.sh

# Generate TypeScript types
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubevirt.json -g ${GENERATOR} -o ./generated/kubevirt/${KUBEVIRT_RELEASE}/ --skip-validate-spec --type-mappings=Date=string
${OPENAPI_GENERATOR_CLI} generate -i swagger-containerized-data-importer.json -g ${GENERATOR} -o ./generated/containerized-data-importer/${CDI_RELEASE}/ --skip-validate-spec --type-mappings=Date=string
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubernetes.json -g ${GENERATOR} -o ./generated/kubernetes/${KUBERNETES_RELEASE}/ --skip-validate-spec --type-mappings=Date=string

# Create dist folder
mkdir -p ./kubevirt
mkdir -p ./containerized-data-importer
mkdir -p ./kubernetes

# Copy models to dist folder
cp -rf ./generated/kubevirt/${KUBEVIRT_RELEASE}/* ./kubevirt/
cp -rf ./generated/containerized-data-importer/${CDI_RELEASE}/* ./containerized-data-importer/
cp -rf ./generated/kubernetes/${KUBERNETES_RELEASE}/* ./kubernetes/
