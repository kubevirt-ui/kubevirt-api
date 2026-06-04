import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

/** Represents a disk created on the cluster level */
export interface V1HostDisk {
  /** Capacity of the sparse disk */
  capacity?: K8sIoApimachineryPkgApiResourceQuantity;
  /**
   * The path to HostDisk image located on the cluster
   * @default ""
   */
  path: string;
  /** Shared indicate whether the path is shared between nodes */
  shared?: boolean;
  /**
   * Contains information if disk.img exists or should be created allowed options are 'Disk' and 'DiskOrCreate'
   * @default ""
   */
  type: string;
}
