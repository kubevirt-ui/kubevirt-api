#!/usr/bin/env bash

NMSTATE_RELEASE=v0.84.0

NMSTATE_PATH=./generated/nmstate
CRDS_PATH=${NMSTATE_PATH}/.crds

# Create directories
mkdir -p ${NMSTATE_PATH}
mkdir -p ${CRDS_PATH}

# Download CRDs
curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nmstates.yaml -o ${CRDS_PATH}/nmstate.io_nmstates.yaml
curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationpolicies.yaml -o ${CRDS_PATH}/nmstate.io_nodenetworkconfigurationpolicies.yaml
curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationenactments.yaml -o ${CRDS_PATH}/nmstate.io_nodenetworkconfigurationenactments.yaml
curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkstates.yaml -o ${CRDS_PATH}/nmstate.io_nodenetworkstates.yaml

# Generate OpenAPI spec from CRDs
./node_modules/.bin/crdtoapi -i ${CRDS_PATH} -o ${NMSTATE_PATH}/.openapi.yaml

# Generate TypeScript models using OpenAPI Generator
./node_modules/.bin/openapi-generator-cli generate -i ${NMSTATE_PATH}/.openapi.yaml -g typescript-fetch -o ${NMSTATE_PATH}/ --skip-validate-spec

# Generate models index file
find ${NMSTATE_PATH}/models -name "*.ts" -type f | sed 's|^'${NMSTATE_PATH}'/models/||' | sed -e 's/^/export * from ".\//' | sed -e 's/\.ts$/";/' > ${NMSTATE_PATH}/models/index.ts

# Apply patch fix
git apply ./scripts/nmstateFix.patch

# Add custom models export to main index
echo "export * from './custom-models';" >> ${NMSTATE_PATH}/index.ts

# Copy models to dist folder
cp -rf ./generated/nmstate/* ./nmstate/
