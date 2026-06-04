import type { IoK8sApiAutoscalingV2MetricIdentifier } from './IoK8sApiAutoscalingV2MetricIdentifier';
import type { IoK8sApiAutoscalingV2MetricValueStatus } from './IoK8sApiAutoscalingV2MetricValueStatus';

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export interface IoK8sApiAutoscalingV2ExternalMetricStatus {
  /** current contains the current value for the given metric */
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  /** metric identifies the target metric by name and selector */
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
}
