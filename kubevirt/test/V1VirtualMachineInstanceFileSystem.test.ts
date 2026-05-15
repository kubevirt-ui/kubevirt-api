import { V1VirtualMachineInstanceFileSystem } from '../models/V1VirtualMachineInstanceFileSystem';

export const testObject: V1VirtualMachineInstanceFileSystem = {
  disk: [
    {
      busType: 'virtio',
      serial: 'DISK123456',
    },
  ],
  diskName: 'vda',
  fileSystemType: 'ext4',
  mountPoint: '/',
  totalBytes: 10737418240,
  usedBytes: 1073741824,
};
