import { V1VirtualMachineCondition } from '../models/V1VirtualMachineCondition';

export const testObject: V1VirtualMachineCondition = {
  message: 'Virtual machine is running',
  reason: 'VMRunning',
  status: 'True',
  type: 'Ready',
};
