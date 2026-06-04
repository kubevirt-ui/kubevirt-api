import type { V1VirtualMachineExportLink } from './V1VirtualMachineExportLink';

/** VirtualMachineExportLinks contains the links that point the exported VM resources */
export interface V1VirtualMachineExportLinks {
  /** VirtualMachineExportLink contains a list of volumes available for export, as well as the URLs to obtain these volumes */
  external?: V1VirtualMachineExportLink;
  /** VirtualMachineExportLink contains a list of volumes available for export, as well as the URLs to obtain these volumes */
  internal?: V1VirtualMachineExportLink;
}
