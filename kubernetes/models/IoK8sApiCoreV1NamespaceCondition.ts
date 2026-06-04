import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** NamespaceCondition contains details about state of namespace. */
export interface IoK8sApiCoreV1NamespaceCondition {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Human-readable message indicating details about last transition. */
  message?: string;
  /** Unique, one-word, CamelCase reason for the condition's last transition. */
  reason?: string;
  /** Status of the condition, one of True, False, Unknown. */
  status: string;
  /** Type of namespace controller condition. */
  type: string;
}
