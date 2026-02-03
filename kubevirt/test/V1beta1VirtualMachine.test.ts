import { V1beta1VirtualMachine } from '../models/V1beta1VirtualMachine';

export const testObject: V1beta1VirtualMachine = {
  metadata: {
    name: 'test-vm',
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
  status: {},
};
