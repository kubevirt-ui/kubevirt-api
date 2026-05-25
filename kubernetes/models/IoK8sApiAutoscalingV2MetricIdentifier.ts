import type { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiAutoscalingV2MetricIdentifier {
  /** name is the name of the given metric */
  name: string;
  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics. */
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
