import type { IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition } from './IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition';
import type { IoK8sApiAutoscalingV2MetricStatus } from './IoK8sApiAutoscalingV2MetricStatus';
import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus {
  /** conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. */
  conditions?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition[];
  /** currentMetrics is the last read state of the metrics used by this autoscaler. */
  currentMetrics?: IoK8sApiAutoscalingV2MetricStatus[];
  /**
   * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
   * @format int32
   */
  currentReplicas?: number;
  /**
   * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
   * @format int32
   */
  desiredReplicas: number;
  /** lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed. */
  lastScaleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /**
   * observedGeneration is the most recent generation observed by this autoscaler.
   * @format int64
   */
  observedGeneration?: number;
}
