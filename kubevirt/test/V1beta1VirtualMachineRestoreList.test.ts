import { V1beta1VirtualMachineRestoreList } from '../models/V1beta1VirtualMachineRestoreList';

export const testObject: V1beta1VirtualMachineRestoreList = {
  apiVersion: 'snapshot.kubevirt.io/v1beta1',
  kind: 'VirtualMachineRestoreList',
  items: [
    {
      spec: {
        target: {
          apiGroup: 'kubevirt.io',
          kind: 'VirtualMachine',
          name: 'my-vm',
        },
        virtualMachineSnapshotName: 'my-vm-snapshot',
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
