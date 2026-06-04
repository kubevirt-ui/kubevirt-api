/** DataVolumeSourceSnapshot provides the parameters to create a Data Volume from an existing VolumeSnapshot */
export interface V1beta1DataVolumeSourceSnapshot {
  /**
   * The name of the source VolumeSnapshot
   * @default ""
   */
  name: string;
  /**
   * The namespace of the source VolumeSnapshot
   * @default ""
   */
  namespace: string;
}
