import { V1VirtualMachineInstanceSpec } from '../models/V1VirtualMachineInstanceSpec';

export const testObject: V1VirtualMachineInstanceSpec = {
  domain: {
    devices: {},
  },
  nodeSelector: { 'kubernetes.io/os': 'linux' },
  hostname: 'my-vmi',
};
