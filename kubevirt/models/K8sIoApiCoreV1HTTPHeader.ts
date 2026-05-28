export interface K8sIoApiCoreV1HTTPHeader {
  /**
   * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
   * @default ""
   */
  name: string;
  /**
   * The header field value
   * @default ""
   */
  value: string;
}
