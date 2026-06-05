/** UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters. */
export interface IoK8sApiBatchV1UncountedTerminatedPods {
  /** failed holds UIDs of failed Pods. */
  failed?: string[];
  /** succeeded holds UIDs of succeeded Pods. */
  succeeded?: string[];
}
