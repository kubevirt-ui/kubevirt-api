import { V1beta1VolumeBackup } from '../models/V1beta1VolumeBackup';

export const testObject: V1beta1VolumeBackup = {
  persistentVolumeClaim: {
    metadata: {
      name: 'backup-pvc',
    },
    spec: {
      resources: {
        requests: { storage: '10Gi' },
      },
    },
  },
  volumeName: 'data-volume',
  volumeSnapshotName: 'snapshot-123',
};
