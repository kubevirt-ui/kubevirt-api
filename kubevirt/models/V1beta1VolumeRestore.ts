export interface V1beta1VolumeRestore {
  dataVolumeName?: string;
  /** @default "" */
  persistentVolumeClaim: string;
  /** @default "" */
  volumeName: string;
  /** @default "" */
  volumeSnapshotName: string;
}
