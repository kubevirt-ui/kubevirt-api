/** ImportStatus of a currently in progress import */
export interface V1beta1ImportStatus {
  /**
   * DataVolumeName is the currently in progress import DataVolume
   * @default ""
   */
  DataVolumeName: string;
  /**
   * Digest of the currently imported image
   * @default ""
   */
  Digest: string;
}
