import type { IoK8sApiCoreV1LoadBalancerIngress } from './IoK8sApiCoreV1LoadBalancerIngress';

export interface IoK8sApiCoreV1LoadBalancerStatus {
  /** Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points. */
  ingress?: IoK8sApiCoreV1LoadBalancerIngress[];
}
