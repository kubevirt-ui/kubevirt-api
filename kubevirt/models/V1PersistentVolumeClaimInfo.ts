import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

export interface V1PersistentVolumeClaimInfo {
  /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  accessModes?: (
    | "ReadOnlyMany"
    | "ReadWriteMany"
    | "ReadWriteOnce"
    | "ReadWriteOncePod"
  )[];
  /** Capacity represents the capacity set on the corresponding PVC status */
  capacity?: Record<string, K8sIoApimachineryPkgApiResourceQuantity>;
  /** ClaimName is the name of the PVC */
  claimName?: string;
  /** Percentage of filesystem's size to be reserved when resizing the PVC */
  filesystemOverhead?: string;
  /** Preallocated indicates if the PVC's storage is preallocated or not */
  preallocated?: boolean;
  /** Requests represents the resources requested by the corresponding PVC spec */
  requests?: Record<string, K8sIoApimachineryPkgApiResourceQuantity>;
  /**
   * VolumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
   *
   * Possible enum values:
   *  - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
   *  - `"Filesystem"` means the volume will be or is formatted with a filesystem.
   *  - `"FromStorageProfile"` means the volume mode will be auto selected by CDI according to a matching StorageProfile
   */
  volumeMode?: "Block" | "Filesystem" | "FromStorageProfile";
}
