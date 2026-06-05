import type { IoK8sApiAppsV1RollingUpdateDaemonSet } from './IoK8sApiAppsV1RollingUpdateDaemonSet';

/** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export interface IoK8sApiAppsV1DaemonSetUpdateStrategy {
  /** Rolling update config params. Present only if type = "RollingUpdate". */
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateDaemonSet;
  /** Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate. */
  type?: string;
}
