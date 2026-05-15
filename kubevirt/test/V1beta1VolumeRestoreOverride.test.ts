import { V1beta1VolumeRestoreOverride } from '../models/V1beta1VolumeRestoreOverride';

export const testObject: V1beta1VolumeRestoreOverride = {
  annotations: { 'backup.velero.io/backup-volumes': 'data' },
  labels: { app: 'restored-app' },
  restoreName: 'custom-restore-name',
  volumeName: 'data-volume',
};
