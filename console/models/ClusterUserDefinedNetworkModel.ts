import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const ClusterUserDefinedNetworkModel: K8sModel = {
  abbr: 'CUDN',
  apiGroup: 'k8s.ovn.org',
  apiVersion: 'v1',
  crd: true,
  id: 'clusteruserdefinednetwork',
  kind: 'ClusterUserDefinedNetwork',
  label: 'clusteruserdefinednetwork',
  labelKey: 'ClusterUserDefinedNetwork',
  labelPlural: 'ClusterUserDefinedNetworks',
  labelPluralKey: 'ClusterUserDefinedNetworks',
  namespaced: false,
  plural: 'clusteruserdefinednetworks',
};

export const ClusterUserDefinedNetworkModelGroupVersionKind = modelToGroupVersionKind(
  ClusterUserDefinedNetworkModel,
);
export const ClusterUserDefinedNetworkModelRef = modelToRef(ClusterUserDefinedNetworkModel);
