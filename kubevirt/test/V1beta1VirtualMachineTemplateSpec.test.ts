import { V1beta1VirtualMachineTemplateSpec } from '../models/V1beta1VirtualMachineTemplateSpec';

export const testObject: V1beta1VirtualMachineTemplateSpec = {
  metadata: {
    labels: { app: 'test-vm' },
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
