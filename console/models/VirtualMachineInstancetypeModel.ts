import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const VirtualMachineInstancetypeModel: K8sModel = {
  label: 'VirtualMachineInstancetype',
  labelPlural: 'VirtualMachineInstancetypes',
  apiVersion: 'v1beta1',
  apiGroup: 'instancetype.kubevirt.io',
  plural: 'virtualmachineinstancetypes',
  abbr: 'VMCI',
  namespaced: false,
  kind: 'VirtualMachineInstancetype',
  id: 'virtualmachineinstancetype',
  crd: true,
};

export const VirtualMachineInstancetypeModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineInstancetypeModel,
);
export const VirtualMachineInstancetypeModelRef = modelToRef(VirtualMachineInstancetypeModel);

export default VirtualMachineInstancetypeModel;
