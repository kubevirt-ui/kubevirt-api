#!/usr/bin/env bash

OPENAPI_GENERATOR_CLI=./node_modules/.bin/openapi-generator-cli

# Use released versions
KUBEVIRT_RELEASE=release-0.47
CDI_RELEASE=release-v1.41

# Download swagger openapi specs
curl https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubevirt.json
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json -o swagger-containerized-data-importer.json

# Generate TypeScript types
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubevirt.json -g typescript -o ./generated/kubevirt/${KUBEVIRT_RELEASE}/ --skip-validate-spec
${OPENAPI_GENERATOR_CLI} generate -i swagger-containerized-data-importer.json -g typescript -o ./generated/containerized-data-importer/${CDI_RELEASE}/ --skip-validate-spec

# Create disk folder
mkdir -p ./kubevirt
mkdir -p ./containerized-data-importer

# Copy models to dist folder
cp -rf ./generated/kubevirt/${KUBEVIRT_RELEASE}/models/* ./kubevirt/
cp -rf ./generated/containerized-data-importer/${CDI_RELEASE}/models/* ./containerized-data-importer/

# Create model indexes
cp ./kubevirt/all.ts ./kubevirt/index.ts
cp ./containerized-data-importer/all.ts ./containerized-data-importer/index.ts

# Hack: remove `import { HttpFile } from '../http/http';` lines
#       a bug in openapi-generator-cli 5.3.0 generates this lines and we need to remove them manually.
sed -i "/^import [{] HttpFile [}] from '..\/http\/http';$/d" ./kubevirt/* 
sed -i "/^import [{] HttpFile [}] from '..\/http\/http';$/d" ./containerized-data-importer/* 