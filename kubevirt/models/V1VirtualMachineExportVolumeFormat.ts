/** VirtualMachineExportVolumeFormat contains the format type and URL to get the volume in that format */
export interface V1VirtualMachineExportVolumeFormat {
  /**
   * Format is the format of the image at the specified URL
   * @default ""
   */
  format: string;
  /**
   * Url is the url that contains the volume in the format specified
   * @default ""
   */
  url: string;
}
