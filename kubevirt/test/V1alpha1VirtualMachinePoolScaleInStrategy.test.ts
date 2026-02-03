import { V1alpha1VirtualMachinePoolScaleInStrategy } from '../models/V1alpha1VirtualMachinePoolScaleInStrategy';

export const testObject: V1alpha1VirtualMachinePoolScaleInStrategy = {
  proactive: {
    selectionPolicy: {
      basePolicy: 'DescendingOrder',
    },
  },
};
