import type { V1VirtualMachineExportVolumeFormat } from './V1VirtualMachineExportVolumeFormat';

/** VirtualMachineExportVolume contains the name and available formats for the exported volume */
export interface V1VirtualMachineExportVolume {
  formats?: V1VirtualMachineExportVolumeFormat[];
  /**
   * Name is the name of the exported volume
   * @default ""
   */
  name: string;
}
