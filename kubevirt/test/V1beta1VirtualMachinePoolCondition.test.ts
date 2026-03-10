import { V1beta1VirtualMachinePoolCondition } from '../models/V1beta1VirtualMachinePoolCondition';

export const testObject: V1beta1VirtualMachinePoolCondition = {
  message: 'All replicas are ready',
  reason: 'ReplicasReady',
  status: 'True',
  type: 'Ready',
};
