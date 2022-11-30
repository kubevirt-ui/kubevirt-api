import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const NodeNetworkConfigurationEnactmentModel: K8sModel = {
  label: 'NodeNetworkConfigurationEnactment',
  labelPlural: 'NodeNetworkConfigurationEnactments',
  apiVersion: 'v1beta1',
  apiGroup: 'nmstate.io',
  plural: 'nodenetworkconfigurationenactments',
  abbr: 'NNCE',
  namespaced: false,
  kind: 'NodeNetworkConfigurationEnactment',
  id: 'NodeNetworkConfigurationEnactment',
  crd: true,
};

export const NodeNetworkConfigurationEnactmentModelGroupVersionKind = modelToGroupVersionKind(
  NodeNetworkConfigurationEnactmentModel,
);
export const NodeNetworkConfigurationEnactmentModelRef = modelToRef(
  NodeNetworkConfigurationEnactmentModel,
);

export default NodeNetworkConfigurationEnactmentModel;
