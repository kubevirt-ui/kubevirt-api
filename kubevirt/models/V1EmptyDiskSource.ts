import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

/** EmptyDisk represents a temporary disk which shares the vmis lifecycle. */
export interface V1EmptyDiskSource {
  /** Capacity of the sparse disk. */
  capacity: K8sIoApimachineryPkgApiResourceQuantity;
}
