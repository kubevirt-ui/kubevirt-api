import type { K8sIoApiCoreV1TypedLocalObjectReference } from './K8sIoApiCoreV1TypedLocalObjectReference';
import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

/** VirtualMachineBackupSpec is the spec for a VirtualMachineBackup resource */
export interface V1alpha1VirtualMachineBackupSpec {
  /** ForceFullBackup indicates that a full backup is desired */
  forceFullBackup?: boolean;
  /** Mode specifies the way the backup output will be recieved */
  mode?: string;
  /** PvcName required in push mode. Specifies the name of the PVC where the backup output will be stored */
  pvcName?: string;
  /** SkipQuiesce indicates whether the VM's filesystem shoule not be quiesced before the backup */
  skipQuiesce?: boolean;
  /**
   * Source specifies the backup source - either a VirtualMachine or a VirtualMachineBackupTracker. When Kind is VirtualMachine: performs a backup of the specified VM. When Kind is VirtualMachineBackupTracker: uses the tracker to get the source VM and the base checkpoint for incremental backup. The tracker will be updated with the new checkpoint after backup completion.
   * @default {}
   */
  source: K8sIoApiCoreV1TypedLocalObjectReference;
  /** TokenSecretRef is the name of the secret that will be used to pull the backup from an associated endpoint */
  tokenSecretRef?: string;
  /** TtlDuration limits the lifetime of a pull mode backup and its export If this field is set, after this duration has passed from counting from CreationTimestamp, the backup is eligible to be automatically considered as complete. If this field is omitted, a reasonable default is applied. */
  ttlDuration?: K8sIoApimachineryPkgApisMetaV1Duration;
}
