import { V1VirtualMachineInstanceStatus } from '../models/V1VirtualMachineInstanceStatus';

export const testObject: V1VirtualMachineInstanceStatus = {
  activePods: { 'pod-123': 'node1' },
  conditions: [
    {
      status: 'True',
      type: 'Ready',
    },
  ],
  nodeName: 'node1',
  phase: 'Running',
};
