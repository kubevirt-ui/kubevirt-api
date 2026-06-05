import type { IoK8sApiResourceV1beta2Counter } from './IoK8sApiResourceV1beta2Counter';

/** DeviceCounterConsumption defines a set of counters that a device will consume from a CounterSet. */
export interface IoK8sApiResourceV1beta2DeviceCounterConsumption {
  /** CounterSet is the name of the set from which the counters defined will be consumed. */
  counterSet: string;
  /**
   * Counters defines the counters that will be consumed by the device.
   *
   * The maximum number counters in a device is 32. In addition, the maximum number of all counters in all devices is 1024 (for example, 64 devices with 16 counters each).
   */
  counters: Record<string, IoK8sApiResourceV1beta2Counter>;
}
