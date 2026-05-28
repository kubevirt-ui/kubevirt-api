import type { IoK8sApiResourceV1alpha3Counter } from './IoK8sApiResourceV1alpha3Counter';

export interface IoK8sApiResourceV1alpha3DeviceCounterConsumption {
  /** CounterSet defines the set from which the counters defined will be consumed. */
  counterSet: string;
  /**
   * Counters defines the Counter that will be consumed by the device.
   *
   * The maximum number counters in a device is 32. In addition, the maximum number of all counters in all devices is 1024 (for example, 64 devices with 16 counters each).
   */
  counters: Record<string, IoK8sApiResourceV1alpha3Counter>;
}
