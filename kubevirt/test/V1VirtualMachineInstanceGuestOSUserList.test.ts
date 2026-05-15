import { V1VirtualMachineInstanceGuestOSUserList } from '../models/V1VirtualMachineInstanceGuestOSUserList';

export const testObject: V1VirtualMachineInstanceGuestOSUserList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstanceGuestOSUserList',
  items: [
    {
      userName: 'root',
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
