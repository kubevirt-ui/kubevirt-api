import type { IoK8sApiAppsV1DaemonSetCondition } from './IoK8sApiAppsV1DaemonSetCondition';

export interface IoK8sApiAppsV1DaemonSetStatus {
  /**
   * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   * @format int32
   */
  collisionCount?: number;
  /** Represents the latest available observations of a DaemonSet's current state. */
  conditions?: IoK8sApiAppsV1DaemonSetCondition[];
  /**
   * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   * @format int32
   */
  currentNumberScheduled: number;
  /**
   * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   * @format int32
   */
  desiredNumberScheduled: number;
  /**
   * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
   * @format int32
   */
  numberAvailable?: number;
  /**
   * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   * @format int32
   */
  numberMisscheduled: number;
  /**
   * numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
   * @format int32
   */
  numberReady: number;
  /**
   * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
   * @format int32
   */
  numberUnavailable?: number;
  /**
   * The most recent generation observed by the daemon set controller.
   * @format int64
   */
  observedGeneration?: number;
  /**
   * The total number of nodes that are running updated daemon pod
   * @format int32
   */
  updatedNumberScheduled?: number;
}
