import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

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
