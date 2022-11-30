import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const NodeNetworkConfigurationPolicyModel: K8sModel = {
  label: 'NodeNetworkConfigurationPolicy',
  labelPlural: 'NodeNetworkConfigurationPolicies',
  apiVersion: 'v1',
  apiGroup: 'nmstate.io',
  plural: 'nodenetworkconfigurationpolicies',
  abbr: 'NNCP',
  namespaced: false,
  kind: 'NodeNetworkConfigurationPolicy',
  id: 'NodeNetworkConfigurationPolicy',
  crd: true,
};

export const NodeNetworkConfigurationPolicyModelGroupVersionKind = modelToGroupVersionKind(
  NodeNetworkConfigurationPolicyModel,
);
export const NodeNetworkConfigurationPolicyModelRef = modelToRef(
  NodeNetworkConfigurationPolicyModel,
);

export default NodeNetworkConfigurationPolicyModel;
