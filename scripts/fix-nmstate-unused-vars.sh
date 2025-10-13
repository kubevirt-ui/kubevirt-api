#!/usr/bin/env bash

MODELS_PATH=./nmstate/models

# Rename unused 'value' parameter
perl -pi -e 's/value: object/_value: object/g' ./nmstate/models/*.ts
perl -pi -e 's/ in value/ in _value/g' ./nmstate/models/*.ts

# Rename unused 'ignoreDiscriminator' parameter
perl -pi -e 's/ignoreDiscriminator/_ignoreDiscriminator/g' ./nmstate/models/*.ts
