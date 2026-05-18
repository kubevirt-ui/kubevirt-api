#!/usr/bin/env bash
set -eu

SWAGGER_FILE=${1:-swagger-kubevirt.json}

# Use jq to find and update the "creationTimestamp" field dynamically
jq '
  (.. | objects | select(has("creationTimestamp")) | .creationTimestamp) |= {
    description: "CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
    "$ref": "#/definitions/k8s.io.apimachinery.pkg.apis.meta.v1.Time"
  }
' "${SWAGGER_FILE}" > "${SWAGGER_FILE}.tmp" && mv "${SWAGGER_FILE}.tmp" "${SWAGGER_FILE}"

echo "Successfully updated creationTimestamp in ${SWAGGER_FILE}"
