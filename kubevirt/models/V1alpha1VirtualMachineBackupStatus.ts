import type { K8sIoApimachineryPkgApisMetaV1Condition } from './K8sIoApimachineryPkgApisMetaV1Condition';
import type { V1alpha1BackupVolumeInfo } from './V1alpha1BackupVolumeInfo';

/** VirtualMachineBackupStatus is the status for a VirtualMachineBackup resource */
export type V1alpha1VirtualMachineBackupStatus = {
  /** CheckpointName the name of the checkpoint created for the current backup */
  checkpointName?: string;
  conditions?: K8sIoApimachineryPkgApisMetaV1Condition[];
  /** EndpointCert is the raw CACert that is to be used when connecting to an exported backup endpoint in pull mode. */
  endpointCert?: string;
  /** IncludedVolumes lists the volumes that were included in the backup */
  includedVolumes?: V1alpha1BackupVolumeInfo[];
  /** Type indicates if the backup was full or incremental */
  type?: string;
} | null;
