[![NPM Version](https://img.shields.io/npm/v/gm.svg?style=flat)](https://www.npmjs.org/package/@kubevirt-ui/kubevirt-api)

# kubevirt-api

![alt gopher network](https://raw.githubusercontent.com/kubevirt-ui/kubevirt-api/main/images/logos.png)

kubevirt OpenAPI automation for TypeScript types

## Documentation

Auto generated docs for [KubeVirt API Docs](https://kubevirt-ui.github.io/kubevirt-api/)

## Auto generated using OpenAPI sources:

- Openshift Console - https://github.com/openshift/console
- Kubevirt - https://github.com/kubevirt/kubevirt
- Kubernetes - https://github.com/kubernetes/kubernetes
- Containerized data importer (CDI) - https://github.com/kubevirt/containerized-data-importer

kubevirt API reference:
http://kubevirt.io/api-reference/master/index.html

## Usage

``` bash
# Add to your project
yarn add @kubevirt-ui/kubevirt-api
```

``` typescript
// Import examples
import { IoK8sApiCoreV1Pod } from '@kubevirt-ui/kubevirt-api/kubernetes'
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt'
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer'

import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models'
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel'
```

## Update API

1. Make sure you have all dependencies installed

``` bash
yarn
```

2. Go to the `scripts/generate.sh` script and modify the package's version the latest available version.

* Note: for Console API take the latest commit hash

3. It is essential to remove old API first

``` bash
yarn clean:all
```

4. Generate the new API

``` bash
yarn generate
```

5. If you got an error while generating a new API, follow the `Update patch files` section below,
Otherwise, you can add and commit your changes.

## Update patch files

The `yarn generate` might fail for linter issues, in that case try to follow these steps.

1. Commit current changes

``` bash
git add . && git commit -m "Save initial API generation"
```

2. The `yarn generate` should have provided with an error message, try to locate the source of the error, and fix it manually (usually should be an easy fix, like */ is missing the '\' character which faults the comments)

3. After we fixed the errors, we edit the existing patch file.

* Example:
    An error occured on kubernetes/models/IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations.ts, 
    commit changes before fix, manually fix the error, edited the fixGeneratedCommentsInK8s.patch file with:

``` bash
git diff -P kubernetes/models/IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations.ts >> scripts/fixGeneratedCommentsInK8s.patch
```

* Example: 
    An error occured on console/core/index.ts, commit changes before fix, manually fix the error,
    edited the coreModelsUseSDK.patch file with:

``` bash
git diff -P console/core/index.ts >> scripts/coreModelsUseSDK.patch
```

4. Commit the changed patch file and edited files

``` bash
git add . && git commit -m "Edit patch file to fix errors"
```

5. Now we can clean and generate again

``` bash
yarn clean:all && yarn generate
```

Reapet the process if needed, can check more linting errors exist with `yarn lint` and try to fix it with `yarn lint:fix`.