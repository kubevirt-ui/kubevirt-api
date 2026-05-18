#!/usr/bin/env bash
set -eu

SWAGGER_FILE=${1:-swagger-kubevirt.json}

# Use jq to replace the "type" field for the specific definition
jq '
  if .definitions and .definitions["k8s.io.apimachinery.pkg.api.resource.Quantity"] then
    .definitions["k8s.io.apimachinery.pkg.api.resource.Quantity"].type = "string"
  else
    .
  end
' "${SWAGGER_FILE}" > "${SWAGGER_FILE}.tmp" && mv "${SWAGGER_FILE}.tmp" "${SWAGGER_FILE}"

echo "Successfully updated k8s.io.apimachinery.pkg.api.resource.Quantity in ${SWAGGER_FILE}"