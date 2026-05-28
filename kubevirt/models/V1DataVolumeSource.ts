export interface V1DataVolumeSource {
  /** Hotpluggable indicates whether the volume can be hotplugged and hotunplugged. */
  hotpluggable?: boolean;
  /**
   * Name of both the DataVolume and the PVC in the same namespace.
   * @default ""
   */
  name: string;
}
