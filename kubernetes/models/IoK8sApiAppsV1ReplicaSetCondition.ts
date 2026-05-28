import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiAppsV1ReplicaSetCondition {
  /** The last time the condition transitioned from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** A human readable message indicating details about the transition. */
  message?: string;
  /** The reason for the condition's last transition. */
  reason?: string;
  /** Status of the condition, one of True, False, Unknown. */
  status: string;
  /** Type of replica set condition. */
  type: string;
}
