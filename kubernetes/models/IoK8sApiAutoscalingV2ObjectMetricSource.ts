import type { IoK8sApiAutoscalingV2CrossVersionObjectReference } from './IoK8sApiAutoscalingV2CrossVersionObjectReference';
import type { IoK8sApiAutoscalingV2MetricIdentifier } from './IoK8sApiAutoscalingV2MetricIdentifier';
import type { IoK8sApiAutoscalingV2MetricTarget } from './IoK8sApiAutoscalingV2MetricTarget';

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface IoK8sApiAutoscalingV2ObjectMetricSource {
  /** describedObject specifies the descriptions of a object,such as kind,name apiVersion */
  describedObject: IoK8sApiAutoscalingV2CrossVersionObjectReference;
  /** metric identifies the target metric by name and selector */
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
  /** target specifies the target value for the given metric */
  target: IoK8sApiAutoscalingV2MetricTarget;
}
