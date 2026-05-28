import type { V1beta1PersistentVolumeClaim } from './V1beta1PersistentVolumeClaim';

export interface V1beta1VolumeBackup {
  /** @default {} */
  persistentVolumeClaim: V1beta1PersistentVolumeClaim;
  /** @default "" */
  volumeName: string;
  volumeSnapshotName?: string;
}
