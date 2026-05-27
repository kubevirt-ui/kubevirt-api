#!/usr/bin/env bash

VIRT_TEMPLATE_RELEASE=v0.1.7
CRDS_PATH=./virt-template/.crds

mkdir -p ${CRDS_PATH}

curl https://raw.githubusercontent.com/kubevirt/virt-template/${VIRT_TEMPLATE_RELEASE}/config/crd/bases/template.kubevirt.io_virtualmachinetemplates.yaml -o ${CRDS_PATH}/template.kubevirt.io_virtualmachinetemplates.yaml
curl https://raw.githubusercontent.com/kubevirt/virt-template/${VIRT_TEMPLATE_RELEASE}/config/crd/bases/template.kubevirt.io_virtualmachinetemplaterequests.yaml -o ${CRDS_PATH}/template.kubevirt.io_virtualmachinetemplaterequests.yaml
