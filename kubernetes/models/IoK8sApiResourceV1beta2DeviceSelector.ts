import type { IoK8sApiResourceV1beta2CELDeviceSelector } from './IoK8sApiResourceV1beta2CELDeviceSelector';

/** DeviceSelector must have exactly one field set. */
export interface IoK8sApiResourceV1beta2DeviceSelector {
  /** CEL contains a CEL expression for selecting a device. */
  cel?: IoK8sApiResourceV1beta2CELDeviceSelector;
}
