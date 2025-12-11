import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const VirtualMachineCloneModel: K8sModel = {
  label: 'VirtualMachineClone',
  labelPlural: 'VirtualMachineClones',
  apiVersion: 'v1alpha1',
  apiGroup: 'clone.kubevirt.io',
  plural: 'virtualmachineclones',
  abbr: 'VMS',
  namespaced: true,
  kind: 'VirtualMachineClone',
  id: 'virtualmachineclone',
  crd: true,
};

export const VirtualMachineCloneModelGroupVersionKind =
  modelToGroupVersionKind(VirtualMachineCloneModel);
export const VirtualMachineCloneModelRef = modelToRef(VirtualMachineCloneModel);
