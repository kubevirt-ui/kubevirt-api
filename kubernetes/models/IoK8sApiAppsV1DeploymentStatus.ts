import type { IoK8sApiAppsV1DeploymentCondition } from './IoK8sApiAppsV1DeploymentCondition';

export interface IoK8sApiAppsV1DeploymentStatus {
  /**
   * Total number of available non-terminating pods (ready for at least minReadySeconds) targeted by this deployment.
   * @format int32
   */
  availableReplicas?: number;
  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   * @format int32
   */
  collisionCount?: number;
  /** Represents the latest available observations of a deployment's current state. */
  conditions?: IoK8sApiAppsV1DeploymentCondition[];
  /**
   * The generation observed by the deployment controller.
   * @format int64
   */
  observedGeneration?: number;
  /**
   * Total number of non-terminating pods targeted by this Deployment with a Ready Condition.
   * @format int32
   */
  readyReplicas?: number;
  /**
   * Total number of non-terminating pods targeted by this deployment (their labels match the selector).
   * @format int32
   */
  replicas?: number;
  /**
   * Total number of terminating pods targeted by this deployment. Terminating pods have a non-null .metadata.deletionTimestamp and have not yet reached the Failed or Succeeded .status.phase.
   *
   * This is an alpha field. Enable DeploymentReplicaSetTerminatingReplicas to be able to use this field.
   * @format int32
   */
  terminatingReplicas?: number;
  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   * @format int32
   */
  unavailableReplicas?: number;
  /**
   * Total number of non-terminating pods targeted by this deployment that have the desired template spec.
   * @format int32
   */
  updatedReplicas?: number;
}
