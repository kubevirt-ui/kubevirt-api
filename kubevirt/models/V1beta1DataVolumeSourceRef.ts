/** DataVolumeSourceRef defines an indirect reference to the source of data for the DataVolume */
export interface V1beta1DataVolumeSourceRef {
  /**
   * The kind of the source reference, currently only "DataSource" is supported
   * @default ""
   */
  kind: string;
  /**
   * The name of the source reference
   * @default ""
   */
  name: string;
  /** The namespace of the source reference, defaults to the DataVolume namespace */
  namespace?: string;
}
