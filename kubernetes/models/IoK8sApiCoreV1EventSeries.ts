import type { IoK8sApimachineryPkgApisMetaV1MicroTime } from './IoK8sApimachineryPkgApisMetaV1MicroTime';

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export interface IoK8sApiCoreV1EventSeries {
  /**
   * Number of occurrences in this series up to the last heartbeat time
   * @format int32
   */
  count?: number;
  /** Time of the last occurrence observed */
  lastObservedTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
}
