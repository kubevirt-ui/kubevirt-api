import type { V1VirtualMachineInstanceFileSystemDisk } from './V1VirtualMachineInstanceFileSystemDisk';

export interface V1VirtualMachineInstanceFileSystem {
  disk?: V1VirtualMachineInstanceFileSystemDisk[];
  /** @default "" */
  diskName: string;
  /** @default "" */
  fileSystemType: string;
  /** @default "" */
  mountPoint: string;
  /**
   * @format int32
   * @default 0
   */
  totalBytes: number;
  /**
   * @format int32
   * @default 0
   */
  usedBytes: number;
}
