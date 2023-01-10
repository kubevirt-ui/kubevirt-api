import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const VirtualMachineClusterInstancetypeModel: K8sModel = {
  label: 'VirtualMachineClusterInstancetype',
  labelPlural: 'VirtualMachineClusterInstancetypes',
  apiVersion: 'v1alpha2',
  apiGroup: 'instancetype.kubevirt.io',
  plural: 'virtualmachineclusterinstancetypes',
  abbr: 'VMCI',
  namespaced: false,
  kind: 'VirtualMachineClusterInstancetype',
  id: 'virtualmachineclusterinstancetype',
  crd: true,
};

export const VirtualMachineClusterInstancetypeModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineClusterInstancetypeModel,
);
export const VirtualMachineClusterInstancetypeModelRef = modelToRef(
  VirtualMachineClusterInstancetypeModel,
);

export default VirtualMachineClusterInstancetypeModel;
