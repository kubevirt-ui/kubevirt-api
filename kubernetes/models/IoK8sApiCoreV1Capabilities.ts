/** Adds and removes POSIX capabilities from running containers. */
export interface IoK8sApiCoreV1Capabilities {
  /** Added capabilities */
  add?: string[];
  /** Removed capabilities */
  drop?: string[];
}
