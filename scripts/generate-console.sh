#!/usr/bin/env bash
set -eu

OPENAPI_GENERATOR_CLI=./node_modules/.bin/openapi-generator-cli

# openshift console latest main commit hash
OPENSHIFT_CONSOLE_COMMIT=edae2305e01c2e0e8c33727af720ef960088eee3

# Fetch the console core models
curl https://raw.githubusercontent.com/openshift/console/${OPENSHIFT_CONSOLE_COMMIT}/frontend/public/models/index.ts -o console-core-models.ts

# Create disk folder
mkdir -p ./console/core

# Copy models to the core folder
cp -fr console-core-models.ts console/core/index.ts

# Apply the core models SDK patch
git apply ./scripts/coreModelsUseSDK.patch

# -----------------------------------------------------------
## Run linter
yarn lint:fix

# -----------------------------------------------------------
## Generate docs
yarn generate:docs

echo "Console API generation complete."
