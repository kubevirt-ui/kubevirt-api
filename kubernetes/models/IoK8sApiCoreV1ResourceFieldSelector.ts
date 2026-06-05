import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export interface IoK8sApiCoreV1ResourceFieldSelector {
  /** Container name: required for volumes, optional for env vars */
  containerName?: string;
  /** Specifies the output format of the exposed resources, defaults to "1" */
  divisor?: IoK8sApimachineryPkgApiResourceQuantity;
  /** Required: resource to select */
  resource: string;
}
