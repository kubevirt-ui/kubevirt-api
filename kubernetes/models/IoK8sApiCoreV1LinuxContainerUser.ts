/** LinuxContainerUser represents user identity information in Linux containers */
export interface IoK8sApiCoreV1LinuxContainerUser {
  /**
   * GID is the primary gid initially attached to the first process in the container
   * @format int64
   */
  gid: number;
  /** SupplementalGroups are the supplemental groups initially attached to the first process in the container */
  supplementalGroups?: number[];
  /**
   * UID is the primary uid initially attached to the first process in the container
   * @format int64
   */
  uid: number;
}
