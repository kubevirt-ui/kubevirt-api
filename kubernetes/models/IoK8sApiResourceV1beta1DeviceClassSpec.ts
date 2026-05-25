import type { IoK8sApiResourceV1beta1DeviceClassConfiguration } from './IoK8sApiResourceV1beta1DeviceClassConfiguration';
import type { IoK8sApiResourceV1beta1DeviceSelector } from './IoK8sApiResourceV1beta1DeviceSelector';

export interface IoK8sApiResourceV1beta1DeviceClassSpec {
  /**
   * Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.
   *
   * They are passed to the driver, but are not considered while allocating the claim.
   */
  config?: IoK8sApiResourceV1beta1DeviceClassConfiguration[];
  /** Each selector must be satisfied by a device which is claimed via this class. */
  selectors?: IoK8sApiResourceV1beta1DeviceSelector[];
}
