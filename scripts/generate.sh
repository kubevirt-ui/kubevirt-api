#!/usr/bin/env bash

OPENAPI_GENERATOR_CLI=./node_modules/.bin/openapi-generator-cli

# Use released versions
KUBEVIRT_RELEASE=release-0.49
CDI_RELEASE=release-v1.44
GENERATOR=typescript-fetch

# Download swagger openapi specs
curl https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubevirt.json
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json -o swagger-containerized-data-importer.json

# Patch missing creationTimestamp in swagger file
git apply ./scripts/creationTimestamp.patch

# Generate TypeScript types
${OPENAPI_GENERATOR_CLI} generate -i swagger-kubevirt.json -g ${GENERATOR} -o ./generated/kubevirt/${KUBEVIRT_RELEASE}/ --skip-validate-spec --type-mappings=Date=string
${OPENAPI_GENERATOR_CLI} generate -i swagger-containerized-data-importer.json -g ${GENERATOR} -o ./generated/containerized-data-importer/${CDI_RELEASE}/ --skip-validate-spec --type-mappings=Date=string

# Create disk folder
mkdir -p ./kubevirt
mkdir -p ./containerized-data-importer

# Copy models to dist folder
cp -rf ./generated/kubevirt/${KUBEVIRT_RELEASE}/* ./kubevirt/
cp -rf ./generated/containerized-data-importer/${CDI_RELEASE}/* ./containerized-data-importer/

## -----------------------------------------------------------
## Fixes for bad generated code from typescript-fetch generator
## Specific for 0.49 release

# Patch missing creationTimestamp in generated files
git apply ./scripts/creationTimestampGenereted.patch

# Add missing fetch type
git apply ./scripts/globalFetchFix.patch

# Patch ignoreDiscriminator
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./kubevirt/models/* 
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./containerized-data-importer/models/*

# Patch Data type to steing conversion
sed -i "s/.toISOString()//g" ./kubevirt/models/*
sed -E -i "s/new Date\(json\['(.*)'\]\)/\1/g" ./kubevirt/models/*
sed -i "s/.toISOString()//g" ./containerized-data-importer/models/*
sed -E -i "s/new Date\(json\['(.*)'\]\)/\1/g" ./containerized-data-importer/models/*

yarn lint:fix
