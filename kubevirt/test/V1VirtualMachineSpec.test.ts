import { V1VirtualMachineSpec } from '../models/V1VirtualMachineSpec';

export const testObject: V1VirtualMachineSpec = {
  runStrategy: 'Always',
  template: {
    spec: {
      domain: {
        devices: {},
      },
    },
  },
};
