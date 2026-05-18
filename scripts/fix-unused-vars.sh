#!/usr/bin/env bash

MODELS_PATH=${1:?Usage: fix-unused-vars.sh <models-path>}

# Rename unused 'value' parameter
perl -pi -e 's/value: object/_value: object/g' ${MODELS_PATH}/*.ts
perl -pi -e 's/ in value/ in _value/g' ${MODELS_PATH}/*.ts

# Rename unused 'ignoreDiscriminator' parameter
perl -pi -e 's/ignoreDiscriminator/_ignoreDiscriminator/g' ${MODELS_PATH}/*.ts
