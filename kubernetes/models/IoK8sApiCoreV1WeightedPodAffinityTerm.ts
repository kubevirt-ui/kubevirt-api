import type { IoK8sApiCoreV1PodAffinityTerm } from './IoK8sApiCoreV1PodAffinityTerm';

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export interface IoK8sApiCoreV1WeightedPodAffinityTerm {
  /** Required. A pod affinity term, associated with the corresponding weight. */
  podAffinityTerm: IoK8sApiCoreV1PodAffinityTerm;
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   * @format int32
   */
  weight: number;
}
