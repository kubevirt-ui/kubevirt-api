import type { IoK8sApiResourceV1alpha3CELDeviceSelector } from './IoK8sApiResourceV1alpha3CELDeviceSelector';

/** DeviceSelector must have exactly one field set. */
export interface IoK8sApiResourceV1alpha3DeviceSelector {
  /** CEL contains a CEL expression for selecting a device. */
  cel?: IoK8sApiResourceV1alpha3CELDeviceSelector;
}
