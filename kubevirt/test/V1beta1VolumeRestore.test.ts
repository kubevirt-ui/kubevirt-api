import { V1beta1VolumeRestore } from '../models/V1beta1VolumeRestore';

export const testObject: V1beta1VolumeRestore = {
  dataVolumeName: 'restored-dv',
  persistentVolumeClaim: 'restored-pvc',
  volumeName: 'data-volume',
  volumeSnapshotName: 'snapshot-123',
};
