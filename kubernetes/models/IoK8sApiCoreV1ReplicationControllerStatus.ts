import type { IoK8sApiCoreV1ReplicationControllerCondition } from './IoK8sApiCoreV1ReplicationControllerCondition';

export interface IoK8sApiCoreV1ReplicationControllerStatus {
  /**
   * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
   * @format int32
   */
  availableReplicas?: number;
  /** Represents the latest available observations of a replication controller's current state. */
  conditions?: IoK8sApiCoreV1ReplicationControllerCondition[];
  /**
   * The number of pods that have labels matching the labels of the pod template of the replication controller.
   * @format int32
   */
  fullyLabeledReplicas?: number;
  /**
   * ObservedGeneration reflects the generation of the most recently observed replication controller.
   * @format int64
   */
  observedGeneration?: number;
  /**
   * The number of ready replicas for this replication controller.
   * @format int32
   */
  readyReplicas?: number;
  /**
   * Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
   * @format int32
   */
  replicas: number;
}
