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
## Download swagger CLI tools

``` bash
yarn
```
## Generate TypeScript types

``` bash
yarn generate
```
## Update upstream versions

Edit the versions in `./scripts/generate.sh`
