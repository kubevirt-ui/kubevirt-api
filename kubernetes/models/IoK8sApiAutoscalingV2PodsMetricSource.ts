import type { IoK8sApiAutoscalingV2MetricIdentifier } from './IoK8sApiAutoscalingV2MetricIdentifier';
import type { IoK8sApiAutoscalingV2MetricTarget } from './IoK8sApiAutoscalingV2MetricTarget';

export interface IoK8sApiAutoscalingV2PodsMetricSource {
  /** metric identifies the target metric by name and selector */
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
  /** target specifies the target value for the given metric */
  target: IoK8sApiAutoscalingV2MetricTarget;
}
