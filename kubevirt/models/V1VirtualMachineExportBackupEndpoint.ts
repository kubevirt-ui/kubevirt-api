export interface V1VirtualMachineExportBackupEndpoint {
  /**
   * Endpoint is the endpoint of the backup export at the specified URL
   * @default ""
   */
  endpoint: string;
  /**
   * Url is the url that contains the volume in the format specified
   * @default ""
   */
  url: string;
}
