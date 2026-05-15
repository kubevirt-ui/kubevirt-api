#!/usr/bin/env bash
set -eu

KUBEVIRT_RELEASE=main
CDI_RELEASE=main
KUBERNETES_RELEASE=v1.33.0
OPENSHIFT_CONSOLE_COMMIT=main

curl https://raw.githubusercontent.com/kubevirt/kubevirt/${KUBEVIRT_RELEASE}/api/openapi-spec/swagger.json -o kubevirt/swagger.json
curl https://raw.githubusercontent.com/kubevirt/containerized-data-importer/${CDI_RELEASE}/api/openapi-spec/swagger.json -o containerized-data-importer/swagger.json
curl https://raw.githubusercontent.com/kubernetes/kubernetes/${KUBERNETES_RELEASE}/api/openapi-spec/swagger.json -o kubernetes/swagger.json
curl https://raw.githubusercontent.com/openshift/console/${OPENSHIFT_CONSOLE_COMMIT}/frontend/public/models/index.ts -o console-core-models.ts
