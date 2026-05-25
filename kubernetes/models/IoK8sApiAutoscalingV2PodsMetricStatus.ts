import type { IoK8sApiAutoscalingV2MetricIdentifier } from './IoK8sApiAutoscalingV2MetricIdentifier';
import type { IoK8sApiAutoscalingV2MetricValueStatus } from './IoK8sApiAutoscalingV2MetricValueStatus';

export interface IoK8sApiAutoscalingV2PodsMetricStatus {
  /** current contains the current value for the given metric */
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  /** metric identifies the target metric by name and selector */
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
}
