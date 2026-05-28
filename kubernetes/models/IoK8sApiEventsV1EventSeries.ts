import type { IoK8sApimachineryPkgApisMetaV1MicroTime } from './IoK8sApimachineryPkgApisMetaV1MicroTime';

export interface IoK8sApiEventsV1EventSeries {
  /**
   * count is the number of occurrences in this series up to the last heartbeat time.
   * @format int32
   */
  count: number;
  /** lastObservedTime is the time when last Event from the series was seen before last heartbeat. */
  lastObservedTime: IoK8sApimachineryPkgApisMetaV1MicroTime;
}
