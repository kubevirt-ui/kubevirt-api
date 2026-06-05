import type { IoK8sApiResourceV1beta1DeviceClaim } from './IoK8sApiResourceV1beta1DeviceClaim';

/** ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it. */
export interface IoK8sApiResourceV1beta1ResourceClaimSpec {
  /** Devices defines how to request devices. */
  devices?: IoK8sApiResourceV1beta1DeviceClaim;
}
