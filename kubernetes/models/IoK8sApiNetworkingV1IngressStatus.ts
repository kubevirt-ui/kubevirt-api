import type { IoK8sApiNetworkingV1IngressLoadBalancerStatus } from './IoK8sApiNetworkingV1IngressLoadBalancerStatus';

/** IngressStatus describe the current state of the Ingress. */
export interface IoK8sApiNetworkingV1IngressStatus {
  /** loadBalancer contains the current status of the load-balancer. */
  loadBalancer?: IoK8sApiNetworkingV1IngressLoadBalancerStatus;
}
