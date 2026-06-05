import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

/** ResourceQuotaStatus defines the enforced hard limits and observed use. */
export interface IoK8sApiCoreV1ResourceQuotaStatus {
  /** Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ */
  hard?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** Used is the current observed total usage of the resource in the namespace. */
  used?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
}
