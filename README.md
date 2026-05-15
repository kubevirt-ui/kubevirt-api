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

```bash
# Add to your project
yarn add @kubevirt-ui/kubevirt-api
```

```typescript
// Import examples
import { IoK8sApiCoreV1Pod } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer';

import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
```

## Update API

1. Make sure you have all dependencies installed

```bash
yarn
```

2. Go to the `scripts/generate.sh` script and modify the package's version the latest available version.

3. It is essential to remove old API first

```bash
yarn clean:all
```

4. Generate the new API

```bash
yarn generate
```

5. Fix generated API errors:

```bash
yarn generate:fix
```

6. Run linter: (if necesarry fix issues and re-run)

```bash
yarn lint:fix
```

7. Generate docs:

```bash
yarn generate:docs
```
