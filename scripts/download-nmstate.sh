#!/usr/bin/env bash

NMSTATE_RELEASE=v0.84.0
CRDS_PATH=./nmstate/.crds

mkdir -p ${CRDS_PATH}

curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nmstates.yaml -o ${CRDS_PATH}/nmstate.io_nmstates.yaml
curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationpolicies.yaml -o ${CRDS_PATH}/nmstate.io_nodenetworkconfigurationpolicies.yaml
curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkconfigurationenactments.yaml -o ${CRDS_PATH}/nmstate.io_nodenetworkconfigurationenactments.yaml
curl https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/${NMSTATE_RELEASE}/deploy/crds/nmstate.io_nodenetworkstates.yaml -o ${CRDS_PATH}/nmstate.io_nodenetworkstates.yaml
