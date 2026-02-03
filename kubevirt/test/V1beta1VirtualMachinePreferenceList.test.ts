import { V1beta1VirtualMachinePreferenceList } from '../models/V1beta1VirtualMachinePreferenceList';

export const testObject: V1beta1VirtualMachinePreferenceList = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachinePreferenceList',
  items: [
    {
      spec: {},
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
