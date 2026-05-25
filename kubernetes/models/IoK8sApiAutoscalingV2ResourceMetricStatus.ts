import type { IoK8sApiAutoscalingV2MetricValueStatus } from './IoK8sApiAutoscalingV2MetricValueStatus';

export interface IoK8sApiAutoscalingV2ResourceMetricStatus {
  /** current contains the current value for the given metric */
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  /** name is the name of the resource in question. */
  name: string;
}
