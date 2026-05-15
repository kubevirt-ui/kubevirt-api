import { V1VirtualMachineInstanceGuestAgentInfo } from '../models/V1VirtualMachineInstanceGuestAgentInfo';

export const testObject: V1VirtualMachineInstanceGuestAgentInfo = {
  apiVersion: 'subresources.kubevirt.io/v1',
  fsFreezeStatus: 'thawed',
  fsInfo: {
    disks: [
      {
        diskName: 'vda',
        fileSystemType: 'ext4',
        mountPoint: '/',
        totalBytes: 10737418240,
        usedBytes: 1073741824,
      },
    ],
  },
  guestAgentVersion: '5.2.0',
  hostname: 'my-vm.example.com',
  kind: 'VirtualMachineInstanceGuestAgentInfo',
  os: {
    id: 'fedora',
    name: 'Fedora',
    prettyName: 'Fedora 34',
    version: '34',
    versionId: '34',
  },
  supportedCommands: [
    { enabled: true, name: 'guest-ping' },
    { enabled: true, name: 'guest-info' },
  ],
  timezone: 'UTC,0',
  userList: [
    {
      userName: 'root',
    },
  ],
};
