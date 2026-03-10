import { V1beta1VirtualMachinePoolSelectionPolicy } from '../models/V1beta1VirtualMachinePoolSelectionPolicy';

export const testObject: V1beta1VirtualMachinePoolSelectionPolicy = {
  selectors: {
    labelSelector: {
      matchLabels: { priority: 'low' },
    },
  },
  sortPolicy: 'oldest',
};
