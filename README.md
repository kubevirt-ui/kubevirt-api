[![NPM Version](https://img.shields.io/npm/v/gm.svg?style=flat)](https://www.npmjs.org/package/@kubevirt-ui/kubevirt-api)

# kubevirt-api

![alt gopher network](https://raw.githubusercontent.com/kubevirt-ui/kubevirt-api/main/images/logos.png)

TypeScript types for KubeVirt, Kubernetes, CDI, NMState, and related OpenShift Console models.

## Documentation

Auto generated API reference: [KubeVirt API Docs](https://kubevirt-ui.github.io/kubevirt-api/)

## Packages

| Export | Source |
|--------|--------|
| `@kubevirt-ui/kubevirt-api/kubevirt` | [kubevirt](https://github.com/kubevirt/kubevirt) OpenAPI swagger |
| `@kubevirt-ui/kubevirt-api/kubernetes` | [kubernetes](https://github.com/kubernetes/kubernetes) OpenAPI swagger |
| `@kubevirt-ui/kubevirt-api/containerized-data-importer` | [CDI](https://github.com/kubevirt/containerized-data-importer) OpenAPI swagger |
| `@kubevirt-ui/kubevirt-api/nmstate` | [kubernetes-nmstate](https://github.com/nmstate/kubernetes-nmstate) CRDs |
| `@kubevirt-ui/kubevirt-api/virt-template` | [virt-template](https://github.com/kubevirt/virt-template) CRDs |
| `@kubevirt-ui/kubevirt-api/console` | [OpenShift Console](https://github.com/openshift/console) models |

KubeVirt API reference: http://kubevirt.io/api-reference/master/index.html

## Usage

```bash
yarn add @kubevirt-ui/kubevirt-api
```

```typescript
import { IoK8sApiCoreV1Pod } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer';

import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
```

Each package exports **TypeScript interfaces only**. There is no runtime, no serializers, and no generated API client.

## Update API

1. Install dependencies:

```bash
yarn
```

2. Pin upstream versions in `scripts/versions.json` if needed.

3. Remove previously generated output (preserves `kubevirt/test/` and `nmstate/custom-models/`):

```bash
yarn clean:all
```

4. Generate types:

```bash
yarn generate
```

5. Validate and build:

```bash
yarn test
yarn build
```

6. Generate docs (optional):

```bash
yarn generate:docs
```

## Generation pipeline

All generation is handled by a single script:

```bash
yarn generate   # runs scripts/generate-types.sh
```

### Swagger-based packages

Used for **kubevirt**, **kubernetes**, and **containerized-data-importer**:

1. Download upstream swagger JSON
2. Generate types with [`swagger-typescript-api`](https://github.com/acacode/swagger-typescript-api) (`--no-client --modular --patch`, plus `scripts/swagger-type-names.config.cjs` for K8s naming)
3. Split the output into one file per interface via `scripts/split-data-contracts.mjs`

### CRD-based packages

Used for **nmstate** and **virt-template**:

1. Download upstream CRD YAML into `<package>/.crds/`
2. Convert CRDs to OpenAPI with `crdtoapi` → `<package>/.openapi.yaml`
3. Generate interfaces with `crdtotypes` → `<package>/models/`

### Console models

OpenShift Console model definitions are fetched from upstream and written to `console/core/index.ts`. Models that already exist under `console/models/` are deduplicated automatically.

### Scripts

| File | Purpose |
|------|---------|
| `scripts/generate-types.sh` | Main generation entrypoint |
| `scripts/versions.json` | Pinned upstream source versions |
| `scripts/swagger-type-names.config.cjs` | K8s type naming and `format: byte` → `string` for swagger-typescript-api |
| `scripts/split-data-contracts.mjs` | Split swagger output into one type per file |

Intermediate artifacts (`.crds/`, `.openapi.yaml`, `swagger-*.json`) are written next to each package and ignored by git.

## Tests

KubeVirt type tests live in `kubevirt/test/`. Each file exports a `testObject` literal that must satisfy the corresponding generated interface.

```bash
yarn test   # tsc --noEmit
```

Tests without a matching upstream type are kept under `kubevirt/test/orphaned/` and excluded from compilation.

## Breaking changes (v2)

This generation refactor removes runtime exports that were previously produced by `openapi-generator`:

- No `runtime.ts`
- No `apis/` clients
- No `*FromJSON` / `*ToJSON` helpers

Some embedded Kubernetes type names changed (for example `K8sIo*` → `K8SIo*` in swagger-generated packages). Import the resource types you need directly from each package export.
