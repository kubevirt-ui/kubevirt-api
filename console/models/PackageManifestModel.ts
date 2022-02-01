import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';
import { modelToGroupVersionKind, modelToRef } from '../modelUtils'; 

const PackageManifestModel: K8sModel = {
  kind: 'PackageManifest',
  label: 'PackageManifest',
  labelPlural: 'PackageManifests',
  apiGroup: 'packages.operators.coreos.com',
  apiVersion: 'v1',
  abbr: 'PM',
  namespaced: true,
  crd: true,
  plural: 'packagemanifests',
};

export const PackageManifestModelGroupVersionKind = modelToGroupVersionKind(PackageManifestModel);
export const PackageManifestModelRef = modelToRef(PackageManifestModel);

export default PackageManifestModel;
