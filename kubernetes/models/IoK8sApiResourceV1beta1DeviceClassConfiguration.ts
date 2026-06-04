import type { IoK8sApiResourceV1beta1OpaqueDeviceConfiguration } from './IoK8sApiResourceV1beta1OpaqueDeviceConfiguration';

/** DeviceClassConfiguration is used in DeviceClass. */
export interface IoK8sApiResourceV1beta1DeviceClassConfiguration {
  /** Opaque provides driver-specific configuration parameters. */
  opaque?: IoK8sApiResourceV1beta1OpaqueDeviceConfiguration;
}
