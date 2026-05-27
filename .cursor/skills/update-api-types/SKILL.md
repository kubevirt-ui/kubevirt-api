---
name: update-api-types
description: >-
  Updates kubevirt-api TypeScript interfaces from the latest swagger specs and
  CRD sources by diffing and applying only the changed definitions. Use when
  the user says "update api types", "sync swagger", "update latest versions",
  or asks to sync the TypeScript models with upstream kubevirt/CDI/kubernetes.
disable-model-invocation: true
---

# Update API Types from Latest Sources

## Repo structure — interfaces only

Every model file exports **one TypeScript interface and nothing else**. No `instanceOf*`, `FromJSON`, `ToJSON`, `runtime.ts`, or `apis/` anywhere.

```
kubevirt/
  swagger.json          ← swagger source
  models/               ← TS interfaces (4-space indent, import type { X } from './X')
  index.ts              ← export * from './models'
  test/                 ← type-check test objects

containerized-data-importer/
  swagger.json
  models/               ← TS interfaces (2-space indent, import { X } from './')
  index.ts

kubernetes/
  swagger.json
  models/

nmstate/
  .crds/                ← CRD YAML source files
  models/               ← TS interfaces (any|null for top-level k8s fields)
  custom-models/        ← manually maintained — DO NOT modify during updates
  index.ts

virt-template/
  .crds/
  models/               ← crdtotypes style: interface only, @required {true/false} JSDoc

console/
  models/               ← K8sModel metadata objects (not OpenAPI-generated)
  core/                 ← re-exports from openshift/console
```

---

## Pipeline A — Swagger → TypeScript (kubevirt, CDI, kubernetes)

1. Download the new `swagger.json` to `/tmp/kubevirt-api-new/`
2. Diff `definitions` against `<package>/swagger.json`:
   ```js
   const added   = newDefs.filter(k => !old.definitions[k]);
   const removed = oldDefs.filter(k => !new.definitions[k]);
   const changed = inBoth.filter(k => JSON.stringify(old.definitions[k]) !== JSON.stringify(new.definitions[k]));
   ```
3. Apply only the diff to `<package>/models/`:
   - **Added** → new `.ts` file, interface only (see `kubevirt/models/V1VirtualMachineExport.ts`)
   - **Removed** → delete the `.ts` file and `<package>/test/<TypeName>.test.ts`
   - **Changed** → edit only the affected property types/JSDoc
4. Update `<package>/models/index.ts`: remove deleted exports, add new in alphabetical order
5. Replace `<package>/swagger.json` with the downloaded file
6. Run `yarn test` (`tsc --noEmit`) and fix errors

## Pipeline B — CRDs → TypeScript (nmstate, virt-template)

1. Download new CRD YAMLs to `/tmp/kubevirt-api-new/`
2. Diff against `<package>/.crds/<file>.yaml`
3. If changed: replace CRD YAMLs in `<package>/.crds/`, then apply field changes to `<package>/models/`

> `nmstate/custom-models/` is **never touched** by this process.

---

## Source URLs & pinned versions

| Package | Local file | Remote URL | Version |
|---------|------------|------------|---------|
| kubevirt | `kubevirt/swagger.json` | https://raw.githubusercontent.com/kubevirt/kubevirt/main/api/openapi-spec/swagger.json | `main` |
| containerized-data-importer | `containerized-data-importer/swagger.json` | https://raw.githubusercontent.com/kubevirt/containerized-data-importer/main/api/openapi-spec/swagger.json | `main` |
| kubernetes | `kubernetes/swagger.json` | https://raw.githubusercontent.com/kubernetes/kubernetes/v1.33.0/api/openapi-spec/swagger.json | `v1.33.0` (pinned) |
| console | `console-core-models.ts` | https://raw.githubusercontent.com/openshift/console/main/frontend/public/models/index.ts | `main` |
| nmstate CRDs | `nmstate/.crds/*.yaml` | https://raw.githubusercontent.com/nmstate/kubernetes-nmstate/v0.84.0/deploy/crds/ | `v0.84.0` (pinned) |
| virt-template CRDs | `virt-template/.crds/*.yaml` | https://raw.githubusercontent.com/kubevirt/virt-template/v0.1.7/config/crd/bases/ | `v0.1.7` (pinned) |

For pinned versions, check GitHub releases and update `scripts/download-nmstate.sh` / `scripts/download-virt-template.sh`.

---

## Verification agent (mandatory, always run last)

Spawn a read-only sub-agent (`Task` tool, `subagent_type: "explore"`). Pass it this prompt, substituting the actual diff lists:

```
You are a strict verification agent for kubevirt-api.
The parent agent just applied TypeScript changes based on a swagger/CRD diff.

Given:
  SWAGGER_ADDED   = [<comma-separated list>]
  SWAGGER_REMOVED = [<comma-separated list>]
  SWAGGER_CHANGED = [<comma-separated list>]
  CRD_CHANGED     = [<comma-separated yaml filenames>]

Verify ALL of the following:

1. ADDED definitions
   - <TsName>.ts exists in <package>/models/ and exports only a TypeScript interface
   - Required fields are non-optional; optional fields use ?
   - Listed in <package>/models/index.ts

2. REMOVED definitions
   - <TsName>.ts does NOT exist in <package>/models/
   - Export removed from index.ts; no remaining imports in the package

3. CHANGED definitions
   - <TsName>.ts reflects every property change
   - required[] changes reflected (required → non-optional, optional → ?)

4. index.ts consistency
   - Every .ts file in <package>/models/ (except index.ts) has a matching export

5. No stale helpers
   - No file contains instanceOf*, FromJSON, ToJSON, or runtime imports

6. TypeScript compilation
   - No obvious mismatches that would fail tsc --noEmit

Return:
  PASS: <checks that passed>
  FAIL: <violations with exact file names>
  SUMMARY: CLEAN or ISSUES FOUND
```

If `ISSUES FOUND`, fix all violations before finishing.

---

## TypeScript type conventions

- Naming: `v1.Foo` → `V1Foo.ts`, `v1beta1.Foo` → `V1beta1Foo.ts`, `k8s.io.apimachinery.pkg.apis.meta.v1.Foo` → `K8sIoApimachineryPkgApisMetaV1Foo.ts`
- `type: ["string", "null"]` → `string | null`
- Fields in `required[]` → non-optional (`field: T`)
- `k8s.io.apimachinery.pkg.apis.meta.v1.Condition` required fields: `lastTransitionTime`, `message`, `reason`, `status`, `type`
