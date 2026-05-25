#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${ROOT_DIR}"

VERSIONS_FILE="${SCRIPT_DIR}/versions.json"

read_version() {
  jq -r --arg key "$1" '.sources[$key]' "${VERSIONS_FILE}"
}

KUBEVIRT_RELEASE="$(read_version kubevirt)"
CDI_RELEASE="$(read_version containerizedDataImporter)"
KUBERNETES_RELEASE="$(read_version kubernetes)"
OPENSHIFT_CONSOLE_COMMIT="$(read_version openshiftConsole)"
NMSTATE_RELEASE="$(read_version nmstate)"
VIRT_TEMPLATE_RELEASE="$(read_version virtTemplate)"

CRDTOAPI="${ROOT_DIR}/node_modules/.bin/crdtoapi"
CRDPTYPES="${ROOT_DIR}/node_modules/.bin/crdtotypes"
STA="${ROOT_DIR}/node_modules/.bin/swagger-typescript-api"

generate_models_index() {
  local models_dir=$1
  find "${models_dir}" -maxdepth 1 -name '*.ts' ! -name 'index.ts' -type f \
    | sed "s|^${models_dir}/||" \
    | sed "s|^|export * from './|" \
    | sed "s|\.ts$|';|" \
    | sort > "${models_dir}/index.ts"
}

fix_crdtotypes_pattern_comments() {
  local models_dir=$1
  local file
  while IFS= read -r -d '' file; do
    sed '/\* @pattern/d' "${file}" > "${file}.tmp" && mv "${file}.tmp" "${file}"
  done < <(find "${models_dir}" -name '*.ts' -type f -print0)
}

prepare_swagger_package() {
  local pkg_path=$1
  rm -rf "${pkg_path}/models" "${pkg_path}/runtime.ts" "${pkg_path}/apis"
  mkdir -p "${pkg_path}/models"
}

generate_swagger_types() {
  local spec=$1
  local pkg_path=$2
  local models_dir="${pkg_path}/models"

  prepare_swagger_package "${pkg_path}"
  rm -f "${models_dir}/data-contracts.ts" "${models_dir}/Api.ts"
  "${STA}" generate -p "${spec}" -o "${models_dir}" --no-client --modular --patch --silent \
    --custom-config="${SCRIPT_DIR}/swagger-type-names.config.cjs"
  node "${SCRIPT_DIR}/split-data-contracts.mjs" "${models_dir}/data-contracts.ts" "${models_dir}"
  printf '%s\n' 'export * from "./models";' > "${pkg_path}/index.ts"
}

generate_crd_types() {
  local crds_path=$1
  local pkg_path=$2
  local models_dir="${pkg_path}/models"

  mkdir -p "${crds_path}" "${models_dir}"
  "${CRDTOAPI}" -i "${crds_path}" -o "${pkg_path}/.openapi.yaml"
  rm -rf "${models_dir}"
  mkdir -p "${models_dir}"
  "${CRDPTYPES}" -i "${pkg_path}/.openapi.yaml" -o "${models_dir}"
  fix_crdtotypes_pattern_comments "${models_dir}"
  generate_models_index "${models_dir}"
}

generate_console_models() {
  local console_models="${ROOT_DIR}/console-core-models.ts"
  local console_core_index="${ROOT_DIR}/console/core/index.ts"
  local incorrect_import="import { K8sModel as K8sKind } from '@console/dynamic-plugin-sdk/src/api/common-types';"
  local correct_import="import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';"

  curl -fsSL \
    "https://raw.githubusercontent.com/openshift/console/${OPENSHIFT_CONSOLE_COMMIT}/frontend/public/models/index.ts" \
    -o "${console_models}"

  sed "s|${incorrect_import}|${correct_import}|" "${console_models}" > "${console_models}.tmp" \
    && mv "${console_models}.tmp" "${console_models}"
  sed 's|K8sKind|K8sModel|g' "${console_models}" > "${console_models}.tmp" \
    && mv "${console_models}.tmp" "${console_models}"
  sed '/^\/\/ Export models which have legacy plural URLs/,$d' "${console_models}" > "${console_models}.tmp" \
    && mv "${console_models}.tmp" "${console_models}"
  dedupe_console_core_models "${console_models}" "${ROOT_DIR}/console/models"

  mkdir -p "${ROOT_DIR}/console/core"
  cp "${console_models}" "${console_core_index}"
}

dedupe_console_core_models() {
  local core_file=$1
  local models_dir=$2
  local model_file model_name

  for model_file in "${models_dir}"/*Model.ts; do
    [ -f "${model_file}" ] || continue
    model_name=$(basename "${model_file}" .ts)
    perl -0777 -i -pe "s/export const ${model_name}: K8sModel = \\{.*?\\n\\};\\n\\n//sg" "${core_file}"
  done
}

echo "Fetching OpenAPI specs..."
curl -fsSL \
  "https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json" \
  -o swagger-kubevirt.json
curl -fsSL \
  "https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json" \
  -o swagger-containerized-data-importer.json
curl -fsSL \
  "https://raw.githubusercontent.com/kubernetes/kubernetes/${KUBERNETES_RELEASE}/api/openapi-spec/swagger.json" \
  -o swagger-kubernetes.json

echo "Generating kubevirt types..."
generate_swagger_types swagger-kubevirt.json kubevirt

echo "Generating containerized-data-importer types..."
generate_swagger_types swagger-containerized-data-importer.json containerized-data-importer

echo "Generating kubernetes types..."
generate_swagger_types swagger-kubernetes.json kubernetes

echo "Generating nmstate types..."
NMSTATE_CRDS="${ROOT_DIR}/nmstate/.crds"
mkdir -p "${NMSTATE_CRDS}"

curl -fsSL \
  "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nmstates.yaml" \
  -o "${NMSTATE_CRDS}/nmstate.io_nmstates.yaml"
curl -fsSL \
  "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationpolicies.yaml" \
  -o "${NMSTATE_CRDS}/nmstate.io_nodenetworkconfigurationpolicies.yaml"
curl -fsSL \
  "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationenactments.yaml" \
  -o "${NMSTATE_CRDS}/nmstate.io_nodenetworkconfigurationenactments.yaml"
curl -fsSL \
  "https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkstates.yaml" \
  -o "${NMSTATE_CRDS}/nmstate.io_nodenetworkstates.yaml"

generate_crd_types "${NMSTATE_CRDS}" nmstate
printf '%s\n' 'export * from "./models";' 'export * from "./custom-models";' > nmstate/index.ts

echo "Generating virt-template types..."
VIRT_TEMPLATE_CRDS="${ROOT_DIR}/virt-template/.crds"
mkdir -p "${VIRT_TEMPLATE_CRDS}"

curl -fsSL \
  "https://raw.githubusercontent.com/kubevirt/virt-template/${VIRT_TEMPLATE_RELEASE}/config/crd/bases/template.kubevirt.io_virtualmachinetemplates.yaml" \
  -o "${VIRT_TEMPLATE_CRDS}/template.kubevirt.io_virtualmachinetemplates.yaml"
curl -fsSL \
  "https://raw.githubusercontent.com/kubevirt/virt-template/${VIRT_TEMPLATE_RELEASE}/config/crd/bases/template.kubevirt.io_virtualmachinetemplaterequests.yaml" \
  -o "${VIRT_TEMPLATE_CRDS}/template.kubevirt.io_virtualmachinetemplaterequests.yaml"

generate_crd_types "${VIRT_TEMPLATE_CRDS}" virt-template
printf '%s\n' 'export * from "./models";' > virt-template/index.ts

echo "Generating console models..."
generate_console_models

echo "Type generation complete."
