import { V1beta1VirtualMachineRestoreStatus } from '../models/V1beta1VirtualMachineRestoreStatus';

export const testObject: V1beta1VirtualMachineRestoreStatus = {
  complete: true,
  conditions: [
    {
      status: 'True',
      type: 'Ready',
    },
  ],
  deletedDataVolumes: ['old-dv'],
  restoreTime: '2025-01-15T12:00:00Z',
  restores: [
    {
      dataVolumeName: 'restored-dv',
      persistentVolumeClaim: 'restored-pvc',
      volumeName: 'rootdisk',
      volumeSnapshotName: 'snapshot-rootdisk',
    },
  ],
};
