import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1alpha1BackupVolumeInfo } from './V1alpha1BackupVolumeInfo';

/** VirtualMachineInstanceBackupStatus tracks the information of the executed backup */
export interface V1VirtualMachineInstanceBackupStatus {
  /** BackupMsg resturns any relevant information like failure reason unfreeze failed etc... */
  backupMsg?: string;
  /** BackupName is the name of the executed backup */
  backupName?: string;
  /** CheckpointName is the name of the checkpoint created for the backup */
  checkpointName?: string;
  /** Completed indicates the backup completed */
  completed?: boolean;
  /** EndTimestamp is the timestamp when the backup ended */
  endTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** Failed indicates that the backup failed */
  failed?: boolean;
  /** StartTimestamp is the timestamp when the backup started */
  startTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** Volumes lists the volumes included in the backup */
  volumes?: V1alpha1BackupVolumeInfo[];
}
