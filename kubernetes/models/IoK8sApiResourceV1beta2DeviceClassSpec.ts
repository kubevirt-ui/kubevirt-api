import type { IoK8sApiResourceV1beta2DeviceClassConfiguration } from './IoK8sApiResourceV1beta2DeviceClassConfiguration';
import type { IoK8sApiResourceV1beta2DeviceSelector } from './IoK8sApiResourceV1beta2DeviceSelector';

/** DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it. */
export interface IoK8sApiResourceV1beta2DeviceClassSpec {
  /**
   * Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.
   *
   * They are passed to the driver, but are not considered while allocating the claim.
   */
  config?: IoK8sApiResourceV1beta2DeviceClassConfiguration[];
  /** Each selector must be satisfied by a device which is claimed via this class. */
  selectors?: IoK8sApiResourceV1beta2DeviceSelector[];
}
