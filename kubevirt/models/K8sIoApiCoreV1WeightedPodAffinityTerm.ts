import type { K8sIoApiCoreV1PodAffinityTerm } from './K8sIoApiCoreV1PodAffinityTerm';

export interface K8sIoApiCoreV1WeightedPodAffinityTerm {
  /**
   * Required. A pod affinity term, associated with the corresponding weight.
   * @default {}
   */
  podAffinityTerm: K8sIoApiCoreV1PodAffinityTerm;
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   * @format int32
   * @default 0
   */
  weight: number;
}
