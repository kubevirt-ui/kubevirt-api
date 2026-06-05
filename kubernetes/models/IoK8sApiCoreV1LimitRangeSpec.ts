import type { IoK8sApiCoreV1LimitRangeItem } from './IoK8sApiCoreV1LimitRangeItem';

/** LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export interface IoK8sApiCoreV1LimitRangeSpec {
  /** Limits is the list of LimitRangeItem objects that are enforced. */
  limits: IoK8sApiCoreV1LimitRangeItem[];
}
