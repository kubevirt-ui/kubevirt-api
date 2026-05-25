export interface IoK8sApiAuthenticationV1BoundObjectReference {
  /** API version of the referent. */
  apiVersion?: string;
  /** Kind of the referent. Valid kinds are 'Pod' and 'Secret'. */
  kind?: string;
  /** Name of the referent. */
  name?: string;
  /** UID of the referent. */
  uid?: string;
}
