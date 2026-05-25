import type { IoK8sApiNetworkingV1HTTPIngressPath } from './IoK8sApiNetworkingV1HTTPIngressPath';

export interface IoK8sApiNetworkingV1HTTPIngressRuleValue {
  /** paths is a collection of paths that map requests to backends. */
  paths: IoK8sApiNetworkingV1HTTPIngressPath[];
}
