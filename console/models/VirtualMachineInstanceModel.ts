import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const VirtualMachineInstanceModel: K8sModel = {
  label: 'VirtualMachineInstance',
  labelPlural: 'VirtualMachineInstances',
  apiVersion: 'v1',
  apiGroup: 'kubevirt.io',
  plural: 'virtualmachineinstances',
  abbr: 'VMI',
  namespaced: true,
  kind: 'VirtualMachineInstance',
  id: 'virtualmachineinstance',
  color: '#002F5D',
  crd: true,
};

export const VirtualMachineInstanceModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineInstanceModel,
);
export const VirtualMachineInstanceModelRef = modelToRef(VirtualMachineInstanceModel);

export default VirtualMachineInstanceModel;
