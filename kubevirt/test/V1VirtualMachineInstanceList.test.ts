import { V1VirtualMachineInstanceList } from '../models/V1VirtualMachineInstanceList';

export const testObject: V1VirtualMachineInstanceList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstanceList',
  items: [
    {
      spec: {
        domain: {
          devices: {},
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
