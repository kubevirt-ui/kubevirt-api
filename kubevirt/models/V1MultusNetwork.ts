/** Represents the multus cni network. */
export interface V1MultusNetwork {
  /** Select the default network and add it to the multus-cni.io/default-network annotation. */
  default?: boolean;
  /**
   * References to a NetworkAttachmentDefinition CRD object. Format: <networkName>, <namespace>/<networkName>. If namespace is not specified, VMI namespace is assumed.
   * @default ""
   */
  networkName: string;
}
