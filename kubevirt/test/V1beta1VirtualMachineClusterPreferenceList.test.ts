import { V1beta1VirtualMachineClusterPreferenceList } from '../models/V1beta1VirtualMachineClusterPreferenceList';

export const testObject: V1beta1VirtualMachineClusterPreferenceList = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachineClusterPreferenceList',
  items: [
    {
      spec: {},
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
