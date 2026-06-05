import type { V1VirtualMachineInstanceFileSystem } from './V1VirtualMachineInstanceFileSystem';

/** VirtualMachineInstanceFileSystemInfo represents information regarding single guest os filesystem */
export interface V1VirtualMachineInstanceFileSystemInfo {
  disks: V1VirtualMachineInstanceFileSystem[];
}
