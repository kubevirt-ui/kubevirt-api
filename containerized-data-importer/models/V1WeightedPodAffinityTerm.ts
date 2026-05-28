import type { V1PodAffinityTerm } from './V1PodAffinityTerm';

export interface V1WeightedPodAffinityTerm {
  /**
   * Required. A pod affinity term, associated with the corresponding weight.
   * @default {}
   */
  podAffinityTerm: V1PodAffinityTerm;
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   * @format int32
   * @default 0
   */
  weight: number;
}
