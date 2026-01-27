import { V1VirtualMachineInstanceReplicaSetStatus } from '../models/V1VirtualMachineInstanceReplicaSetStatus';

export const testObject: V1VirtualMachineInstanceReplicaSetStatus = {
  conditions: [
    {
      status: 'True',
      type: 'ReplicaReady',
    },
  ],
  labelSelector: 'app=my-vmi',
  readyReplicas: 3,
  replicas: 3,
};
