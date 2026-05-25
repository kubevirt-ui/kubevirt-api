import type { IoK8sApiAutoscalingV2MetricValueStatus } from './IoK8sApiAutoscalingV2MetricValueStatus';

export interface IoK8sApiAutoscalingV2ContainerResourceMetricStatus {
  /** container is the name of the container in the pods of the scaling target */
  container: string;
  /** current contains the current value for the given metric */
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  /** name is the name of the resource in question. */
  name: string;
}
