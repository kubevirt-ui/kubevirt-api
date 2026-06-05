import type { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from './IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition';

/** APIServiceStatus contains derived information about an API server */
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
  /** Current service state of apiService. */
  conditions?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition[];
}
