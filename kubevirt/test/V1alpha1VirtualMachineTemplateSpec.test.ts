import { V1alpha1VirtualMachineTemplateSpec } from '../models/V1alpha1VirtualMachineTemplateSpec';

export const testObject: V1alpha1VirtualMachineTemplateSpec = {
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
