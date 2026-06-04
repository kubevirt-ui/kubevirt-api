import type { K8sIoApiCoreV1TypedLocalObjectReference } from './K8sIoApiCoreV1TypedLocalObjectReference';
import type { V1beta1VolumeRestoreOverride } from './V1beta1VolumeRestoreOverride';

/** VirtualMachineRestoreSpec is the spec for a VirtualMachineRestore resource */
export interface V1beta1VirtualMachineRestoreSpec {
  /**
   * If the target for the restore does not exist, it will be created. Patches holds JSON patches that would be applied to the target manifest before it's created. Patches should fit the target's Kind.
   *
   * Example for a patch: {"op": "replace", "path": "/metadata/name", "value": "new-vm-name"}
   */
  patches?: string[];
  /**
   * initially only VirtualMachine type supported
   * @default {}
   */
  target: K8sIoApiCoreV1TypedLocalObjectReference;
  targetReadinessPolicy?: string;
  /** @default "" */
  virtualMachineSnapshotName: string;
  volumeOwnershipPolicy?: string;
  /** VolumeRestoreOverrides gives the option to change properties of each restored volume For example, specifying the name of the restored volume, or adding labels/annotations to it */
  volumeRestoreOverrides?: V1beta1VolumeRestoreOverride[];
  volumeRestorePolicy?: string;
}
