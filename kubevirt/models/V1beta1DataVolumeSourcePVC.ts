/** DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC */
export interface V1beta1DataVolumeSourcePVC {
  /**
   * The name of the source PVC
   * @default ""
   */
  name: string;
  /**
   * The namespace of the source PVC
   * @default ""
   */
  namespace: string;
}
