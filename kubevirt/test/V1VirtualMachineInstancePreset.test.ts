import { V1VirtualMachineInstancePreset } from '../models/V1VirtualMachineInstancePreset';

export const testObject: V1VirtualMachineInstancePreset = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstancePreset',
  metadata: {
    name: 'my-preset',
    namespace: 'default',
  },
  spec: {
    selector: {
      matchLabels: { preset: 'my-preset' },
    },
  },
};
