import type { V1VirtualMachineExportBackupEndpoint } from './V1VirtualMachineExportBackupEndpoint';

export interface V1VirtualMachineExportBackup {
  endpoints?: V1VirtualMachineExportBackupEndpoint[];
  /**
   * Name is the name of the exported volume
   * @default ""
   */
  name: string;
}
