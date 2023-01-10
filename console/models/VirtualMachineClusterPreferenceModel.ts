import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const VirtualMachineClusterPreferenceModel: K8sModel = {
  label: 'VirtualMachineClusterPreference',
  labelPlural: 'VirtualMachineClusterPreferences',
  apiVersion: 'v1alpha2',
  apiGroup: 'instancetype.kubevirt.io',
  plural: 'virtualmachineclusterpreferences',
  abbr: 'VMCP',
  namespaced: false,
  kind: 'VirtualMachineClusterPreference',
  id: 'virtualmachineclusterpreference',
  crd: true,
};

export const VirtualMachineClusterPreferenceModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineClusterPreferenceModel,
);
export const VirtualMachineClusterPreferenceModelRef = modelToRef(
  VirtualMachineClusterPreferenceModel,
);

export default VirtualMachineClusterPreferenceModel;
