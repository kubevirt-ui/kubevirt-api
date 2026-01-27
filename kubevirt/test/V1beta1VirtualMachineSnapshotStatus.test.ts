import { V1beta1VirtualMachineSnapshotStatus } from '../models/V1beta1VirtualMachineSnapshotStatus';

export const testObject: V1beta1VirtualMachineSnapshotStatus = {
  conditions: [
    {
      status: 'True',
      type: 'Ready',
    },
  ],
  creationTime: '2025-01-15T12:00:00Z',
  indications: ['Online'],
  phase: 'Succeeded',
  readyToUse: true,
  snapshotVolumes: {
    includedVolumes: ['rootdisk'],
    excludedVolumes: ['cloudinit'],
  },
  sourceUID: 'abc123',
  virtualMachineSnapshotContentName: 'my-vm-snapshot-content',
};
