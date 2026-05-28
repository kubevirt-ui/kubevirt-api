import { V1beta1VirtualMachinePoolStatus } from '../models/V1beta1VirtualMachinePoolStatus';

export const testObject: V1beta1VirtualMachinePoolStatus = {
  conditions: [
    {
      message: 'Pool is ready',
      reason: 'PoolReady',
      status: 'True',
      type: 'Ready',
    },
  ],
  labelSelector: 'app=test-vm-pool',
  readyReplicas: 3,
  replicas: 3,
};
