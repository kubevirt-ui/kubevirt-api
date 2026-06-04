import type { IoK8sApiResourceV1beta1Counter } from './IoK8sApiResourceV1beta1Counter';

/**
 * CounterSet defines a named set of counters that are available to be used by devices defined in the ResourceSlice.
 *
 * The counters are not allocatable by themselves, but can be referenced by devices. When a device is allocated, the portion of counters it uses will no longer be available for use by other devices.
 */
export interface IoK8sApiResourceV1beta1CounterSet {
  /**
   * Counters defines the set of counters for this CounterSet The name of each counter must be unique in that set and must be a DNS label.
   *
   * The maximum number of counters is 32.
   */
  counters: Record<string, IoK8sApiResourceV1beta1Counter>;
  /** Name defines the name of the counter set. It must be a DNS label. */
  name: string;
}
