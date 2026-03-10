import { V1beta1VirtualMachinePoolProactiveScaleInStrategy } from '../models/V1beta1VirtualMachinePoolProactiveScaleInStrategy';

export const testObject: V1beta1VirtualMachinePoolProactiveScaleInStrategy = {
  selectionPolicy: {
    selectors: {
      labelSelector: {
        matchLabels: { priority: 'low' },
      },
    },
    sortPolicy: 'oldest',
  },
  statePreservation: 'none',
};
