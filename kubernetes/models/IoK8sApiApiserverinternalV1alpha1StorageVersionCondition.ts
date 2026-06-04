import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** Describes the state of the storageVersion at a certain point. */
export interface IoK8sApiApiserverinternalV1alpha1StorageVersionCondition {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** A human readable message indicating details about the transition. */
  message: string;
  /**
   * If set, this represents the .metadata.generation that the condition was set based upon.
   * @format int64
   */
  observedGeneration?: number;
  /** The reason for the condition's last transition. */
  reason: string;
  /** Status of the condition, one of True, False, Unknown. */
  status: string;
  /** Type of the condition. */
  type: string;
}
