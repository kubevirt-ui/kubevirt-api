import { V1alpha1VirtualMachineBackupList } from '../models/V1alpha1VirtualMachineBackupList';

export const testObject: V1alpha1VirtualMachineBackupList = {
  apiVersion: 'kubevirt.io/v1alpha1',
  items: [
    {
      spec: {
        source: {
          kind: 'VirtualMachine',
          name: 'test-vm',
        },
      },
    },
  ],
  kind: 'VirtualMachineBackupList',
  metadata: {},
};
