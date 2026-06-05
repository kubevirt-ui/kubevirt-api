import type { V1VirtualMachineExportBackupEndpoint } from './V1VirtualMachineExportBackupEndpoint';

/** VirtualMachineExportBackup contains the name and available endpoints for the exported backup */
export interface V1VirtualMachineExportBackup {
  endpoints?: V1VirtualMachineExportBackupEndpoint[];
  /**
   * Name is the name of the exported volume
   * @default ""
   */
  name: string;
}
