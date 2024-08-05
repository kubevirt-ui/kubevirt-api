import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const VirtualMachinePreferenceModel: K8sModel = {
  label: 'VirtualMachinePreference',
  labelPlural: 'VirtualMachinePreferences',
  apiVersion: 'v1beta1',
  apiGroup: 'instancetype.kubevirt.io',
  plural: 'virtualmachinepreferences',
  abbr: 'VMCP',
  namespaced: false,
  kind: 'VirtualMachinePreference',
  id: 'virtualmachinepreference',
  crd: true,
};

export const VirtualMachinePreferenceModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachinePreferenceModel,
);
export const VirtualMachinePreferenceModelRef = modelToRef(VirtualMachinePreferenceModel);

export default VirtualMachinePreferenceModel;
