import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiCoreV1PodCondition {
  /** Last time we probed the condition. */
  lastProbeTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Human-readable message indicating details about last transition. */
  message?: string;
  /**
   * If set, this represents the .metadata.generation that the pod condition was set based upon. This is an alpha field. Enable PodObservedGenerationTracking to be able to use this field.
   * @format int64
   */
  observedGeneration?: number;
  /** Unique, one-word, CamelCase reason for the condition's last transition. */
  reason?: string;
  /** Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
  status: string;
  /** Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
  type: string;
}
