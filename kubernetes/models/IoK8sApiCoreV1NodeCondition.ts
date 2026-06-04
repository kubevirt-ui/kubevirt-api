import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** NodeCondition contains condition information for a node. */
export interface IoK8sApiCoreV1NodeCondition {
  /** Last time we got an update on a given condition. */
  lastHeartbeatTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Last time the condition transit from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Human readable message indicating details about last transition. */
  message?: string;
  /** (brief) reason for the condition's last transition. */
  reason?: string;
  /** Status of the condition, one of True, False, Unknown. */
  status: string;
  /** Type of node condition. */
  type: string;
}
