export interface V1alpha1BackupVolumeInfo {
  /** DataEndpoint is the URL of the endpoint for read for pull mode */
  dataEndpoint?: string;
  /**
   * DiskTarget is the disk target device name at backup time
   * @default ""
   */
  diskTarget: string;
  /** MapEndpoint is the URL of the endpoint for map for pull mode */
  mapEndpoint?: string;
  /**
   * VolumeName is the volume name from VMI spec
   * @default ""
   */
  volumeName: string;
}
