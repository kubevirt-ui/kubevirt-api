import { V1VirtualMachineInstanceTemplateSpec } from '../models/V1VirtualMachineInstanceTemplateSpec';

export const testObject: V1VirtualMachineInstanceTemplateSpec = {
  metadata: {
    name: 'my-vmi-template',
  },
  spec: {
    domain: {
      devices: {},
    },
  },
};
