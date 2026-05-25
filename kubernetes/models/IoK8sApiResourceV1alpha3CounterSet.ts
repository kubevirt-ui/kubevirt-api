import type { IoK8sApiResourceV1alpha3Counter } from './IoK8sApiResourceV1alpha3Counter';

export interface IoK8sApiResourceV1alpha3CounterSet {
  /**
   * Counters defines the counters that will be consumed by the device. The name of each counter must be unique in that set and must be a DNS label.
   *
   * To ensure this uniqueness, capacities defined by the vendor must be listed without the driver name as domain prefix in their name. All others must be listed with their domain prefix.
   *
   * The maximum number of counters is 32.
   */
  counters: Record<string, IoK8sApiResourceV1alpha3Counter>;
  /** CounterSet is the name of the set from which the counters defined will be consumed. */
  name: string;
}
