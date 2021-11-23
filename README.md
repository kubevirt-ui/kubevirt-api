[![NPM Version](https://img.shields.io/npm/v/gm.svg?style=flat)](https://www.npmjs.org/package/@kubevirt-ui/kubevirt-api)

# kubevirt-api
kubevirt OpenAPI automation for TypeScript types

Generate TypeScript types for:
- kubevirt - https://github.com/kubevirt/kubevirt
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
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt'
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer'
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
