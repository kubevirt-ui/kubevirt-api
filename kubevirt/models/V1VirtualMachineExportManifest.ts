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
