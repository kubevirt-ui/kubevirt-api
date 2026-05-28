import type { IoK8sApiResourceV1alpha3DeviceAllocationConfiguration } from './IoK8sApiResourceV1alpha3DeviceAllocationConfiguration';
import type { IoK8sApiResourceV1alpha3DeviceRequestAllocationResult } from './IoK8sApiResourceV1alpha3DeviceRequestAllocationResult';

export interface IoK8sApiResourceV1alpha3DeviceAllocationResult {
  /**
   * This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.
   *
   * This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
   */
  config?: IoK8sApiResourceV1alpha3DeviceAllocationConfiguration[];
  /** Results lists all allocated devices. */
  results?: IoK8sApiResourceV1alpha3DeviceRequestAllocationResult[];
}
