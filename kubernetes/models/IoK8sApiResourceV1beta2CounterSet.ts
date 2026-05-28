import type { IoK8sApiResourceV1beta2Counter } from './IoK8sApiResourceV1beta2Counter';

export interface IoK8sApiResourceV1beta2CounterSet {
  /**
   * Counters defines the set of counters for this CounterSet The name of each counter must be unique in that set and must be a DNS label.
   *
   * The maximum number of counters in all sets is 32.
   */
  counters: Record<string, IoK8sApiResourceV1beta2Counter>;
  /** Name defines the name of the counter set. It must be a DNS label. */
  name: string;
}
