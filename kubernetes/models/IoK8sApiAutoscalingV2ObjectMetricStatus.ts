import type { IoK8sApiAutoscalingV2CrossVersionObjectReference } from './IoK8sApiAutoscalingV2CrossVersionObjectReference';
import type { IoK8sApiAutoscalingV2MetricIdentifier } from './IoK8sApiAutoscalingV2MetricIdentifier';
import type { IoK8sApiAutoscalingV2MetricValueStatus } from './IoK8sApiAutoscalingV2MetricValueStatus';

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface IoK8sApiAutoscalingV2ObjectMetricStatus {
  /** current contains the current value for the given metric */
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  /** DescribedObject specifies the descriptions of a object,such as kind,name apiVersion */
  describedObject: IoK8sApiAutoscalingV2CrossVersionObjectReference;
  /** metric identifies the target metric by name and selector */
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
}
