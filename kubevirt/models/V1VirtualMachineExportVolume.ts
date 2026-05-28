import type { V1VirtualMachineExportVolumeFormat } from './V1VirtualMachineExportVolumeFormat';

export interface V1VirtualMachineExportVolume {
  formats?: V1VirtualMachineExportVolumeFormat[];
  /**
   * Name is the name of the exported volume
   * @default ""
   */
  name: string;
}
