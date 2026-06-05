import type { IoK8sApiResourceV1alpha3DeviceClaim } from './IoK8sApiResourceV1alpha3DeviceClaim';

/** ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it. */
export interface IoK8sApiResourceV1alpha3ResourceClaimSpec {
  /** Devices defines how to request devices. */
  devices?: IoK8sApiResourceV1alpha3DeviceClaim;
}
