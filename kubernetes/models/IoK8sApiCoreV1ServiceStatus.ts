import type { IoK8sApiCoreV1LoadBalancerStatus } from './IoK8sApiCoreV1LoadBalancerStatus';
import type { IoK8sApimachineryPkgApisMetaV1Condition } from './IoK8sApimachineryPkgApisMetaV1Condition';

export interface IoK8sApiCoreV1ServiceStatus {
  /** Current service state */
  conditions?: IoK8sApimachineryPkgApisMetaV1Condition[];
  /** LoadBalancer contains the current status of the load-balancer, if one is present. */
  loadBalancer?: IoK8sApiCoreV1LoadBalancerStatus;
}
