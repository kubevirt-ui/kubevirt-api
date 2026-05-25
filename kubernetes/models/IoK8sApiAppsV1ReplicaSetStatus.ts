import type { IoK8sApiAppsV1ReplicaSetCondition } from './IoK8sApiAppsV1ReplicaSetCondition';

export interface IoK8sApiAppsV1ReplicaSetStatus {
  /**
   * The number of available non-terminating pods (ready for at least minReadySeconds) for this replica set.
   * @format int32
   */
  availableReplicas?: number;
  /** Represents the latest available observations of a replica set's current state. */
  conditions?: IoK8sApiAppsV1ReplicaSetCondition[];
  /**
   * The number of non-terminating pods that have labels matching the labels of the pod template of the replicaset.
   * @format int32
   */
  fullyLabeledReplicas?: number;
  /**
   * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
   * @format int64
   */
  observedGeneration?: number;
  /**
   * The number of non-terminating pods targeted by this ReplicaSet with a Ready Condition.
   * @format int32
   */
  readyReplicas?: number;
  /**
   * Replicas is the most recently observed number of non-terminating pods. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset
   * @format int32
   */
  replicas: number;
  /**
   * The number of terminating pods for this replica set. Terminating pods have a non-null .metadata.deletionTimestamp and have not yet reached the Failed or Succeeded .status.phase.
   *
   * This is an alpha field. Enable DeploymentReplicaSetTerminatingReplicas to be able to use this field.
   * @format int32
   */
  terminatingReplicas?: number;
}
