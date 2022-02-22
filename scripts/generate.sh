#!/usr/bin/env bash
set -eu

OPENAPI_GENERATOR_CLI=./node_modules/.bin/openapi-generator-cli

# Use released versions
KUBEVIRT_RELEASE=release-0.49
CDI_RELEASE=release-v1.44
KUBERNETES_RELEASE=release-1.23
OPENSHIFT_CONSOLE_RELEASE=release-4.11

GENERATOR=typescript-fetch

## -----------------------------------------------------------
## Fetch OpenAPI decleration files and proccess them

# Download swagger openapi specs
curl https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubevirt.json
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json -o swagger-containerized-data-importer.json
curl https://raw.githubusercontent.com/kubernetes/kubernetes/${KUBERNETES_RELEASE}/api/openapi-spec/swagger.json -o swagger-kubernetes.json
curl https://raw.githubusercontent.com/openshift/console/${OPENSHIFT_CONSOLE_RELEASE}/frontend/public/models/index.ts -o console-core-models.ts

# Patch missing creationTimestamp in swagger file
git apply ./scripts/creationTimestamp.patch

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

## -----------------------------------------------------------
## Fixes for bad generated code from typescript-fetch generator
## Specific for current releases

# Patch missing globalFetch type in generated files
git apply ./scripts/globalFetchFix.patch

# Patch ignoreDiscriminator
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./kubevirt/models/* 
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./containerized-data-importer/models/*
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./kubernetes/models/*

# Patch Data type to steing conversion
sed -i "s/.toISOString()//g" ./kubevirt/models/*
sed -i "s/new Date\((json\['.*'\])\)/\1/g" ./kubevirt/models/*
sed -i "s/.toISOString()//g" ./containerized-data-importer/models/*
sed -i "s/new Date\((json\['.*'\])\)/\1/g" ./containerized-data-importer/models/*
sed -i "s/.toISOString()//g" ./kubernetes/models/*
sed -i "s/new Date\((json\['.*'\])\)/\1/g" ./kubernetes/models/*

# Fetch console models and patch them
mkdir -p ./console/core
cp -fr console-core-models.ts console/core/index.ts
git apply ./scripts/coreModelsUseSDK.patch

# Fix broken comments
git apply ./scripts/fixGeneratedCommentsInK8s.patch

## -----------------------------------------------------------
## Run linter
yarn lint:fix

# -----------------------------------------------------------
## Generate docs
yarn generate:docs
