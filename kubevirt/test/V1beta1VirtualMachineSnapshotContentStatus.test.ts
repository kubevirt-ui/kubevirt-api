import { V1beta1VirtualMachineSnapshotContentStatus } from '../models/V1beta1VirtualMachineSnapshotContentStatus';

export const testObject: V1beta1VirtualMachineSnapshotContentStatus = {
  creationTime: '2025-01-15T12:00:00Z',
  readyToUse: true,
  volumeSnapshotStatus: [
    {
      volumeSnapshotName: 'snapshot-rootdisk',
    },
  ],
};
