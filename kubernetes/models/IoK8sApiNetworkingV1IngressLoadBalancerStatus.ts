import type { IoK8sApiNetworkingV1IngressLoadBalancerIngress } from './IoK8sApiNetworkingV1IngressLoadBalancerIngress';

/** IngressLoadBalancerStatus represents the status of a load-balancer. */
export interface IoK8sApiNetworkingV1IngressLoadBalancerStatus {
  /** ingress is a list containing ingress points for the load-balancer. */
  ingress?: IoK8sApiNetworkingV1IngressLoadBalancerIngress[];
}
