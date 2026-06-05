import type { IoK8sApiResourceV1beta2OpaqueDeviceConfiguration } from './IoK8sApiResourceV1beta2OpaqueDeviceConfiguration';

/** DeviceClaimConfiguration is used for configuration parameters in DeviceClaim. */
export interface IoK8sApiResourceV1beta2DeviceClaimConfiguration {
  /** Opaque provides driver-specific configuration parameters. */
  opaque?: IoK8sApiResourceV1beta2OpaqueDeviceConfiguration;
  /**
   * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
   *
   * References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.
   */
  requests?: string[];
}
