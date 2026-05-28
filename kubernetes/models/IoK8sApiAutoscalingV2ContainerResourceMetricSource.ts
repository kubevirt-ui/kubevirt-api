import type { IoK8sApiAutoscalingV2MetricTarget } from './IoK8sApiAutoscalingV2MetricTarget';

export interface IoK8sApiAutoscalingV2ContainerResourceMetricSource {
  /** container is the name of the container in the pods of the scaling target */
  container: string;
  /** name is the name of the resource in question. */
  name: string;
  /** target specifies the target value for the given metric */
  target: IoK8sApiAutoscalingV2MetricTarget;
}
