import type { IoK8sApiResourceV1alpha3OpaqueDeviceConfiguration } from './IoK8sApiResourceV1alpha3OpaqueDeviceConfiguration';

export interface IoK8sApiResourceV1alpha3DeviceAllocationConfiguration {
  /** Opaque provides driver-specific configuration parameters. */
  opaque?: IoK8sApiResourceV1alpha3OpaqueDeviceConfiguration;
  /**
   * Requests lists the names of requests where the configuration applies. If empty, its applies to all requests.
   *
   * References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.
   */
  requests?: string[];
  /** Source records whether the configuration comes from a class and thus is not something that a normal user would have been able to set or from a claim. */
  source: string;
}
