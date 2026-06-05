import type { IoK8sApiStorageV1CSINodeDriver } from './IoK8sApiStorageV1CSINodeDriver';

/** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export interface IoK8sApiStorageV1CSINodeSpec {
  /** drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty. */
  drivers: IoK8sApiStorageV1CSINodeDriver[];
}
