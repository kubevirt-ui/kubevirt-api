import { V1VirtualMachineList } from '../models/V1VirtualMachineList';

export const testObject: V1VirtualMachineList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineList',
  items: [
    {
      spec: {
        template: {
          spec: {
            domain: {
              devices: {},
            },
          },
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
