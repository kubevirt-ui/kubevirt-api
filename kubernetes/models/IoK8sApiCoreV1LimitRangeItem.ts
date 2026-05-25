import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

export interface IoK8sApiCoreV1LimitRangeItem {
  /** Default resource requirement limit value by resource name if resource limit is omitted. */
  default?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** DefaultRequest is the default resource requirement request value by resource name if resource request is omitted. */
  defaultRequest?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** Max usage constraints on this kind by resource name. */
  max?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource. */
  maxLimitRequestRatio?: Record<
    string,
    IoK8sApimachineryPkgApiResourceQuantity
  >;
  /** Min usage constraints on this kind by resource name. */
  min?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** Type of resource that this limit applies to. */
  type: string;
}
