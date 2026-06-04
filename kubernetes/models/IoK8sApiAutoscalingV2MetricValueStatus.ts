import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

/** MetricValueStatus holds the current value for a metric */
export interface IoK8sApiAutoscalingV2MetricValueStatus {
  /**
   * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
   * @format int32
   */
  averageUtilization?: number;
  /** averageValue is the current value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  /** value is the current value of the metric (as a quantity). */
  value?: IoK8sApimachineryPkgApiResourceQuantity;
}
