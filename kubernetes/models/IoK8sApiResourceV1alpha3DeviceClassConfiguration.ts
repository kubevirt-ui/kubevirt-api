import type { IoK8sApiResourceV1alpha3OpaqueDeviceConfiguration } from './IoK8sApiResourceV1alpha3OpaqueDeviceConfiguration';

/** DeviceClassConfiguration is used in DeviceClass. */
export interface IoK8sApiResourceV1alpha3DeviceClassConfiguration {
  /** Opaque provides driver-specific configuration parameters. */
  opaque?: IoK8sApiResourceV1alpha3OpaqueDeviceConfiguration;
}
