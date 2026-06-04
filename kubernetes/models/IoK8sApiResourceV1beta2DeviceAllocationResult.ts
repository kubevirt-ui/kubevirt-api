import type { IoK8sApiResourceV1beta2DeviceAllocationConfiguration } from './IoK8sApiResourceV1beta2DeviceAllocationConfiguration';
import type { IoK8sApiResourceV1beta2DeviceRequestAllocationResult } from './IoK8sApiResourceV1beta2DeviceRequestAllocationResult';

/** DeviceAllocationResult is the result of allocating devices. */
export interface IoK8sApiResourceV1beta2DeviceAllocationResult {
  /**
   * This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.
   *
   * This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
   */
  config?: IoK8sApiResourceV1beta2DeviceAllocationConfiguration[];
  /** Results lists all allocated devices. */
  results?: IoK8sApiResourceV1beta2DeviceRequestAllocationResult[];
}
