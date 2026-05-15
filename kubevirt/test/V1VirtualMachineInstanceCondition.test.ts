import { V1VirtualMachineInstanceCondition } from '../models/V1VirtualMachineInstanceCondition';

export const testObject: V1VirtualMachineInstanceCondition = {
  message: 'Virtual machine instance is running',
  reason: 'VMIRunning',
  status: 'True',
  type: 'Ready',
};
