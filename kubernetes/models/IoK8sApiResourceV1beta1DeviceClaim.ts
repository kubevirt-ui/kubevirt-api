import type { IoK8sApiResourceV1beta1DeviceClaimConfiguration } from './IoK8sApiResourceV1beta1DeviceClaimConfiguration';
import type { IoK8sApiResourceV1beta1DeviceConstraint } from './IoK8sApiResourceV1beta1DeviceConstraint';
import type { IoK8sApiResourceV1beta1DeviceRequest } from './IoK8sApiResourceV1beta1DeviceRequest';

/** DeviceClaim defines how to request devices with a ResourceClaim. */
export interface IoK8sApiResourceV1beta1DeviceClaim {
  /** This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim. */
  config?: IoK8sApiResourceV1beta1DeviceClaimConfiguration[];
  /** These constraints must be satisfied by the set of devices that get allocated for the claim. */
  constraints?: IoK8sApiResourceV1beta1DeviceConstraint[];
  /** Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated. */
  requests?: IoK8sApiResourceV1beta1DeviceRequest[];
}
