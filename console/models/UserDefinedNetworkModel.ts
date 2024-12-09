import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { modelToGroupVersionKind, modelToRef } from 'console/modelUtils';

const UserDefinedNetworkModel: K8sModel = {
  abbr: 'UDN',
  apiGroup: 'k8s.ovn.org',
  apiVersion: 'v1',
  crd: true,
  id: 'userdefinednetwork',
  kind: 'UserDefinedNetwork',
  label: 'userdefinednetwork',
  labelKey: 'UserDefinedNetwork',
  labelPlural: 'UserDefinedNetworks',
  labelPluralKey: 'UserDefinedNetworks',
  namespaced: true,
  plural: 'userdefinednetworks',
};

export const UserDefinedNetworkModelGroupVersionKind =
  modelToGroupVersionKind(UserDefinedNetworkModel);
export const UserDefinedNetworkModelRef = modelToRef(UserDefinedNetworkModel);

export default UserDefinedNetworkModel;
