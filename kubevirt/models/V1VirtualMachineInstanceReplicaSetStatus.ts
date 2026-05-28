import type { V1VirtualMachineInstanceReplicaSetCondition } from './V1VirtualMachineInstanceReplicaSetCondition';

export type V1VirtualMachineInstanceReplicaSetStatus = {
  conditions?: V1VirtualMachineInstanceReplicaSetCondition[];
  /** Canonical form of the label selector for HPA which consumes it through the scale subresource. */
  labelSelector?: string;
  /**
   * The number of ready replicas for this replica set.
   * @format int32
   */
  readyReplicas?: number;
  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   * @format int32
   */
  replicas?: number;
} | null;
