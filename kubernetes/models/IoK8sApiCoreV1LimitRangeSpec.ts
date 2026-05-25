import type { IoK8sApiCoreV1LimitRangeItem } from './IoK8sApiCoreV1LimitRangeItem';

export interface IoK8sApiCoreV1LimitRangeSpec {
  /** Limits is the list of LimitRangeItem objects that are enforced. */
  limits: IoK8sApiCoreV1LimitRangeItem[];
}
