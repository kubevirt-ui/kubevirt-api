import type { V1VirtualMachineExportBackup } from './V1VirtualMachineExportBackup';
import type { V1VirtualMachineExportManifest } from './V1VirtualMachineExportManifest';
import type { V1VirtualMachineExportVolume } from './V1VirtualMachineExportVolume';

/** VirtualMachineExportLink contains a list of volumes available for export, as well as the URLs to obtain these volumes */
export interface V1VirtualMachineExportLink {
  /** Backups is a list of available backups for the export */
  backups?: V1VirtualMachineExportBackup[];
  /**
   * Cert is the public CA certificate base64 encoded
   * @default ""
   */
  cert: string;
  /** Manifests is a list of available manifests for the export */
  manifests?: V1VirtualMachineExportManifest[];
  /** Volumes is a list of available volumes to export */
  volumes?: V1VirtualMachineExportVolume[];
}
