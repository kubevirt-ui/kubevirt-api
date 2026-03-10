import { V1alpha1VirtualMachineBackup } from '../models/V1alpha1VirtualMachineBackup';

export const testObject: V1alpha1VirtualMachineBackup = {
  apiVersion: 'kubevirt.io/v1alpha1',
  kind: 'VirtualMachineBackup',
  metadata: {
    name: 'vm-backup-001',
    namespace: 'default',
  },
  spec: {
    source: {
      kind: 'VirtualMachine',
      name: 'test-vm',
    },
    mode: 'full',
    skipQuiesce: false,
  },
  status: {
    checkpointName: 'checkpoint-001',
    conditions: [
      {
        status: 'True',
        type: 'Ready',
      },
    ],
  },
};
