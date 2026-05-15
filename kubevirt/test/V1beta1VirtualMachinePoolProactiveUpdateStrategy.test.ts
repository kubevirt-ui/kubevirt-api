import { V1beta1VirtualMachinePoolProactiveUpdateStrategy } from '../models/V1beta1VirtualMachinePoolProactiveUpdateStrategy';

export const testObject: V1beta1VirtualMachinePoolProactiveUpdateStrategy = {
  selectionPolicy: {
    selectors: {
      labelSelector: {
        matchLabels: { priority: 'low' },
      },
    },
    sortPolicy: 'oldest',
  },
};
