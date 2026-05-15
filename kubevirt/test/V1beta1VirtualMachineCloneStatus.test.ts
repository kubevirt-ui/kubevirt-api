import { V1beta1VirtualMachineCloneStatus } from '../models/V1beta1VirtualMachineCloneStatus';

export const testObject: V1beta1VirtualMachineCloneStatus = {
  conditions: [
    {
      status: 'True',
      type: 'Ready',
    },
  ],
  creationTime: '2025-01-15T12:00:00Z',
  phase: 'Succeeded',
  restoreName: 'clone-restore-abc123',
  snapshotName: 'clone-snapshot-abc123',
  targetName: 'cloned-vm',
};
