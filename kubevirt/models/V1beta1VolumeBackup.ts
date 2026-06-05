import type { V1beta1PersistentVolumeClaim } from './V1beta1PersistentVolumeClaim';

/** VolumeBackup contains the data neeed to restore a PVC */
export interface V1beta1VolumeBackup {
  /** @default {} */
  persistentVolumeClaim: V1beta1PersistentVolumeClaim;
  /** @default "" */
  volumeName: string;
  volumeSnapshotName?: string;
}
