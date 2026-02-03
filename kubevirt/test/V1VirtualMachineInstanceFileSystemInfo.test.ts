import { V1VirtualMachineInstanceFileSystemInfo } from '../models/V1VirtualMachineInstanceFileSystemInfo';

export const testObject: V1VirtualMachineInstanceFileSystemInfo = {
  disks: [
    {
      diskName: 'vda',
      fileSystemType: 'ext4',
      mountPoint: '/',
      totalBytes: 10737418240,
      usedBytes: 1073741824,
    },
  ],
};
