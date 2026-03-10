import { V1beta1VirtualMachinePoolUpdateStrategy } from '../models/V1beta1VirtualMachinePoolUpdateStrategy';

export const testObject: V1beta1VirtualMachinePoolUpdateStrategy = {
  opportunistic: {},
  proactive: {
    selectionPolicy: {
      sortPolicy: 'oldest',
    },
  },
  unmanaged: {},
};
