import { V1beta1VirtualMachineSnapshotContentSpec } from '../models/V1beta1VirtualMachineSnapshotContentSpec';

export const testObject: V1beta1VirtualMachineSnapshotContentSpec = {
  source: {
    virtualMachine: {
      metadata: { name: 'my-vm' },
    },
  },
  virtualMachineSnapshotName: 'my-vm-snapshot',
  volumeBackups: [
    {
      persistentVolumeClaim: { metadata: { name: 'my-pvc' } },
      volumeName: 'rootdisk',
    },
  ],
};
