import type { IoK8sApiCoreV1ClientIPConfig } from './IoK8sApiCoreV1ClientIPConfig';

export interface IoK8sApiCoreV1SessionAffinityConfig {
  /** clientIP contains the configurations of Client IP based session affinity. */
  clientIP?: IoK8sApiCoreV1ClientIPConfig;
}
