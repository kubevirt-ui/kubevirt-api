import type { IoK8sApiResourceV1beta1CELDeviceSelector } from './IoK8sApiResourceV1beta1CELDeviceSelector';

/** DeviceSelector must have exactly one field set. */
export interface IoK8sApiResourceV1beta1DeviceSelector {
  /** CEL contains a CEL expression for selecting a device. */
  cel?: IoK8sApiResourceV1beta1CELDeviceSelector;
}
