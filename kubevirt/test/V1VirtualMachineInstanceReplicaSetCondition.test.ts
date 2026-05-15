import { V1VirtualMachineInstanceReplicaSetCondition } from '../models/V1VirtualMachineInstanceReplicaSetCondition';

export const testObject: V1VirtualMachineInstanceReplicaSetCondition = {
  message: 'All replicas are ready',
  reason: 'ReplicaSetReplicasReady',
  status: 'True',
  type: 'ReplicaReady',
};
