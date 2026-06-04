/** DataVolumeCheckpoint defines a stage in a warm migration. */
export interface V1beta1DataVolumeCheckpoint {
  /**
   * Current is the identifier of the snapshot created for this checkpoint.
   * @default ""
   */
  current: string;
  /**
   * Previous is the identifier of the snapshot from the previous checkpoint.
   * @default ""
   */
  previous: string;
}
