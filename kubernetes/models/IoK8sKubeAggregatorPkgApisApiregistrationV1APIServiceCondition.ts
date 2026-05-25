import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Human-readable message indicating details about last transition. */
  message?: string;
  /** Unique, one-word, CamelCase reason for the condition's last transition. */
  reason?: string;
  /** Status is the status of the condition. Can be True, False, Unknown. */
  status: string;
  /** Type is the type of the condition. */
  type: string;
}
