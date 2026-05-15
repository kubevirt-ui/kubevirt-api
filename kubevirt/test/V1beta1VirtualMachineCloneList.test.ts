import { V1beta1VirtualMachineCloneList } from '../models/V1beta1VirtualMachineCloneList';

export const testObject: V1beta1VirtualMachineCloneList = {
  apiVersion: 'clone.kubevirt.io/v1beta1',
  kind: 'VirtualMachineCloneList',
  items: [
    {
      spec: {
        source: {
          apiGroup: 'kubevirt.io',
          kind: 'VirtualMachine',
          name: 'source-vm',
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
