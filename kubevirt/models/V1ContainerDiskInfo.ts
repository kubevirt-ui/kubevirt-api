/** ContainerDiskInfo shows info about the containerdisk */
export interface V1ContainerDiskInfo {
  /**
   * Checksum is the checksum of the rootdisk or kernel artifacts inside the containerdisk
   * @format int64
   */
  checksum?: number;
}
