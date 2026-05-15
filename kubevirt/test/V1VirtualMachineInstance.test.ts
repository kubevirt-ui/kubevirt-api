import { V1VirtualMachineInstance } from '../models/V1VirtualMachineInstance';

export const testObject: V1VirtualMachineInstance = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstance',
  metadata: {
    name: 'my-vmi',
    namespace: 'default',
  },
  spec: {
    domain: {
      devices: {},
    },
  },
};
