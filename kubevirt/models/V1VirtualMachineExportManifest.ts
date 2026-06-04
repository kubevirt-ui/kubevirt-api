/** VirtualMachineExportManifest contains the type and URL of the exported manifest */
export interface V1VirtualMachineExportManifest {
  /**
   * Type is the type of manifest returned
   * @default ""
   */
  type: string;
  /**
   * Url is the url of the endpoint that returns the manifest
   * @default ""
   */
  url: string;
}
