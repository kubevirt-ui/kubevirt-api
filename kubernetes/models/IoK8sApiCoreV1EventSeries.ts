import type { IoK8sApimachineryPkgApisMetaV1MicroTime } from './IoK8sApimachineryPkgApisMetaV1MicroTime';

export interface IoK8sApiCoreV1EventSeries {
  /**
   * Number of occurrences in this series up to the last heartbeat time
   * @format int32
   */
  count?: number;
  /** Time of the last occurrence observed */
  lastObservedTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
}
