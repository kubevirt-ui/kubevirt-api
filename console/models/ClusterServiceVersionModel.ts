import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const ClusterServiceVersionModel: K8sModel = {
  kind: 'ClusterServiceVersion',
  label: 'ClusterServiceVersion',
  labelKey: 'ClusterServiceVersion',
  labelPlural: 'ClusterServiceVersions',
  labelPluralKey: 'ClusterServiceVersions',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  abbr: 'CSV',
  namespaced: true,
  crd: true,
  plural: 'clusterserviceversions',
  propagationPolicy: 'Foreground',
  legacyPluralURL: true,
};

export const ClusterServiceVersionModelGroupVersionKind = modelToGroupVersionKind(ClusterServiceVersionModel);
export const ClusterServiceVersionModelRef = modelToRef(ClusterServiceVersionModel);

export default ClusterServiceVersionModel;
