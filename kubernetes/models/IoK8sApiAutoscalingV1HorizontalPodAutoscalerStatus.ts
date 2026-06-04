import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** current status of a horizontal pod autoscaler */
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus {
  /**
   * currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
   * @format int32
   */
  currentCPUUtilizationPercentage?: number;
  /**
   * currentReplicas is the current number of replicas of pods managed by this autoscaler.
   * @format int32
   */
  currentReplicas: number;
  /**
   * desiredReplicas is the  desired number of replicas of pods managed by this autoscaler.
   * @format int32
   */
  desiredReplicas: number;
  /** lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed. */
  lastScaleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /**
   * observedGeneration is the most recent generation observed by this autoscaler.
   * @format int64
   */
  observedGeneration?: number;
}
