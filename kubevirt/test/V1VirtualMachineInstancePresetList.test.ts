import { V1VirtualMachineInstancePresetList } from '../models/V1VirtualMachineInstancePresetList';

export const testObject: V1VirtualMachineInstancePresetList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachineInstancePresetList',
  items: [
    {
      spec: {
        selector: {
          matchLabels: { 'preset': 'my-preset' },
        },
      },
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
