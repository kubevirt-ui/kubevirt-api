/** InitrdInfo show info about the initrd file */
export interface V1InitrdInfo {
  /**
   * Checksum is the checksum of the initrd file
   * @format int64
   */
  checksum?: number;
}
