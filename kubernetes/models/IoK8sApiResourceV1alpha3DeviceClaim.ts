import type { IoK8sApiResourceV1alpha3DeviceClaimConfiguration } from './IoK8sApiResourceV1alpha3DeviceClaimConfiguration';
import type { IoK8sApiResourceV1alpha3DeviceConstraint } from './IoK8sApiResourceV1alpha3DeviceConstraint';
import type { IoK8sApiResourceV1alpha3DeviceRequest } from './IoK8sApiResourceV1alpha3DeviceRequest';

/** DeviceClaim defines how to request devices with a ResourceClaim. */
export interface IoK8sApiResourceV1alpha3DeviceClaim {
  /** This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim. */
  config?: IoK8sApiResourceV1alpha3DeviceClaimConfiguration[];
  /** These constraints must be satisfied by the set of devices that get allocated for the claim. */
  constraints?: IoK8sApiResourceV1alpha3DeviceConstraint[];
  /** Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated. */
  requests?: IoK8sApiResourceV1alpha3DeviceRequest[];
}
