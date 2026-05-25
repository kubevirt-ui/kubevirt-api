import type { IoK8sApiCoreV1EndpointAddress } from './IoK8sApiCoreV1EndpointAddress';
import type { IoK8sApiCoreV1EndpointPort } from './IoK8sApiCoreV1EndpointPort';

export interface IoK8sApiCoreV1EndpointSubset {
  /** IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize. */
  addresses?: IoK8sApiCoreV1EndpointAddress[];
  /** IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check. */
  notReadyAddresses?: IoK8sApiCoreV1EndpointAddress[];
  /** Port numbers available on the related IP addresses. */
  ports?: IoK8sApiCoreV1EndpointPort[];
}
