export interface V1VolumeSnapshotStatus {
  /**
   * True if the volume supports snapshotting
   * @default false
   */
  enabled: boolean;
  /**
   * Volume name
   * @default ""
   */
  name: string;
  /** Empty if snapshotting is enabled, contains reason otherwise */
  reason?: string;
}
