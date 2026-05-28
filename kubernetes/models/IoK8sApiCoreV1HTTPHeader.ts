export interface IoK8sApiCoreV1HTTPHeader {
  /** The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header. */
  name: string;
  /** The header field value */
  value: string;
}
