import type { V1VirtualMachineInstanceBackupStatus } from './V1VirtualMachineInstanceBackupStatus';

/** ChangedBlockTrackingStatus represents the status of ChangedBlockTracking for a VM */
export interface V1ChangedBlockTrackingStatus {
  /** BackupStatus represents the status of vmi backup */
  backupStatus?: V1VirtualMachineInstanceBackupStatus;
  /**
   * State represents the current CBT state
   * @default ""
   */
  state: string;
}
