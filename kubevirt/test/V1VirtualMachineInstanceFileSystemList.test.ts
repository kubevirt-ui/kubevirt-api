import { V1VirtualMachineInstanceFileSystemList } from '../models/V1VirtualMachineInstanceFileSystemList';

export const testObject: V1VirtualMachineInstanceFileSystemList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstanceFileSystemList',
  items: [
    {
      diskName: 'rootdisk',
      fileSystemType: 'ext4',
      mountPoint: '/',
      totalBytes: 10737418240,
      usedBytes: 5368709120,
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
