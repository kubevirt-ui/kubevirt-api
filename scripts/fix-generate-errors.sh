#!/usr/bin/env bash
set -eu

error_handler() {
    echo "Error occurred in script at line: ${BASH_LINENO[0]}"
    echo "Command: '${BASH_COMMAND}'"
    exit 1
}

trap 'error_handler' ERR

## Fixes for bad generated code from typescript-fetch generator
## Specific for current releases

# Patch missing globalFetch type in generated files
git apply ./scripts/globalFetchFix.patch

# Patch ignoreDiscriminator
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./kubevirt/models/* 
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./containerized-data-importer/models/*
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./kubernetes/models/*

# Patch Data type to steing conversion
sed -i "s/.toISOString()//g" ./kubevirt/models/*
sed -i "s/new Date\((json\['.*'\])\)/\1/g" ./kubevirt/models/*
sed -i "s/.toISOString()//g" ./containerized-data-importer/models/*
sed -i "s/new Date\((json\['.*'\])\)/\1/g" ./containerized-data-importer/models/*
sed -i "s/.toISOString()//g" ./kubernetes/models/*
sed -i "s/new Date\((json\['.*'\])\)/\1/g" ./kubernetes/models/*

# Fetch console models and patch them
mkdir -p ./console/core
yarn generate:fix-console
cp -fr console-core-models.ts console/core/index.ts

# Fix broken comments
chmod +x ./scripts/fix-comments-parsing-errors.sh
./scripts/fix-comments-parsing-errors.sh
