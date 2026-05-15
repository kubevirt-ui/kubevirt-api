import { V1beta1VirtualMachinePoolStatus } from '../models/V1beta1VirtualMachinePoolStatus';

export const testObject: V1beta1VirtualMachinePoolStatus = {
  conditions: [
    {
      message: 'All replicas are ready',
      reason: 'ReplicasReady',
      status: 'True',
      type: 'Ready',
    },
  ],
  labelSelector: 'kubevirt.io/vmpool=test-pool',
  readyReplicas: 3,
  replicas: 3,
};
