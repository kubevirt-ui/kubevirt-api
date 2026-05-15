import { V1alpha1VirtualMachinePoolCondition } from '../models/V1alpha1VirtualMachinePoolCondition';

export const testObject: V1alpha1VirtualMachinePoolCondition = {
  message: 'Pool is ready',
  reason: 'PoolReady',
  status: 'True',
  type: 'Ready',
};
