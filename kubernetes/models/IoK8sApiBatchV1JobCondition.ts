import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiBatchV1JobCondition {
  /** Last time the condition was checked. */
  lastProbeTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Last time the condition transit from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Human readable message indicating details about last transition. */
  message?: string;
  /** (brief) reason for the condition's last transition. */
  reason?: string;
  /** Status of the condition, one of True, False, Unknown. */
  status: string;
  /** Type of job condition, Complete or Failed. */
  type: string;
}
