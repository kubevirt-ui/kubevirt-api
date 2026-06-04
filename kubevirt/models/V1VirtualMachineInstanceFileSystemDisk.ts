/** VirtualMachineInstanceFileSystemDisk represents the guest os FS disks */
export interface V1VirtualMachineInstanceFileSystemDisk {
  /** @default "" */
  busType: string;
  serial?: string;
}
