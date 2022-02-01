import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';
import { modelToGroupVersionKind, modelToRef } from '../modelUtils'; 

const SriovNetworkNodePolicyModel: K8sModel = {
  label: 'SriovNetworkNodePolicy',
  labelPlural: 'SriovNetworkNodePolicies',
  apiVersion: 'v1',
  apiGroup: 'sriovnetwork.openshift.io',
  plural: 'sriovnetworknodepolicies',
  namespaced: true,
  abbr: 'SRNNPM', // TODO check on this
  kind: 'SriovNetworkNodePolicy',
  id: 'sriov-network-node-policy',
  crd: true,
};

export const SriovNetworkNodePolicyModelGroupVersionKind = modelToGroupVersionKind(SriovNetworkNodePolicyModel);
export const SriovNetworkNodePolicyModelRef = modelToRef(SriovNetworkNodePolicyModel);

export default SriovNetworkNodePolicyModel;
