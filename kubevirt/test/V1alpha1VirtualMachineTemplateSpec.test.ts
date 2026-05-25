import { V1beta1VirtualMachineTemplateSpec } from '../models/V1beta1VirtualMachineTemplateSpec';

export const testObject: V1beta1VirtualMachineTemplateSpec = {
  metadata: {
    labels: { app: 'test-vm' },
  },
  spec: {
    running: true,
    template: {
      spec: {
        domain: {
          devices: {},
        },
      },
    },
  },
};
