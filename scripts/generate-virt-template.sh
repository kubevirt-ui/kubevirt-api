#!/usr/bin/env bash

VIRT_TEMPLATE_RELEASE=v0.1.7

VIRT_TEMPLATE_PATH=./generated/virt-template
CRDS_PATH=${VIRT_TEMPLATE_PATH}/.crds
MODELS_PATH=${VIRT_TEMPLATE_PATH}/models

# Create directories
mkdir -p ${VIRT_TEMPLATE_PATH}
mkdir -p ${CRDS_PATH}
mkdir -p ${MODELS_PATH}

# Download CRDs
curl https://raw.githubusercontent.com/kubevirt/virt-template/${VIRT_TEMPLATE_RELEASE}/config/crd/bases/template.kubevirt.io_virtualmachinetemplates.yaml -o ${CRDS_PATH}/template.kubevirt.io_virtualmachinetemplates.yaml
curl https://raw.githubusercontent.com/kubevirt/virt-template/${VIRT_TEMPLATE_RELEASE}/config/crd/bases/template.kubevirt.io_virtualmachinetemplaterequests.yaml -o ${CRDS_PATH}/template.kubevirt.io_virtualmachinetemplaterequests.yaml

# Generate OpenAPI spec from CRDs
./node_modules/.bin/crdtoapi -i ${CRDS_PATH} -o ${VIRT_TEMPLATE_PATH}/.openapi.yaml

# Generate TypeScript types directly from OpenAPI spec using crdtotypes
./node_modules/.bin/crdtotypes -i ${VIRT_TEMPLATE_PATH}/.openapi.yaml -o ${MODELS_PATH}/

# Generate models index file
find ${MODELS_PATH} -name "*.ts" -not -name "index.ts" -type f | sed 's|^'${MODELS_PATH}'/||' | sed -e 's/^/export * from ".\//' | sed -e 's/\.ts$/";/' > ${MODELS_PATH}/index.ts

# Generate top-level index file
echo 'export * from "./models";' > ${VIRT_TEMPLATE_PATH}/index.ts

# Copy to dist folder
mkdir -p ./virt-template
cp -rf ./generated/virt-template/* ./virt-template/
