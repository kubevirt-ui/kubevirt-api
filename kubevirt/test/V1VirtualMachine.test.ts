import { V1VirtualMachine } from '../models/V1VirtualMachine';

export const testObject: V1VirtualMachine = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachine',
  metadata: {
    name: 'my-vm',
    namespace: 'default',
  },
  spec: {
    template: {
      spec: {
        domain: {
          devices: {},
        },
      },
    },
  },
};
