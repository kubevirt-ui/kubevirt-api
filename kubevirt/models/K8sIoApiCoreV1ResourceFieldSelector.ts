import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export interface K8sIoApiCoreV1ResourceFieldSelector {
  /** Container name: required for volumes, optional for env vars */
  containerName?: string;
  /** Specifies the output format of the exposed resources, defaults to "1" */
  divisor?: K8sIoApimachineryPkgApiResourceQuantity;
  /**
   * Required: resource to select
   * @default ""
   */
  resource: string;
}
