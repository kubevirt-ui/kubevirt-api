import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

export interface IoK8sApiAutoscalingV2MetricTarget {
  /**
   * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
   * @format int32
   */
  averageUtilization?: number;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: IoK8sApimachineryPkgApiResourceQuantity;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  type: string;
  /** value is the target value of the metric (as a quantity). */
  value?: IoK8sApimachineryPkgApiResourceQuantity;
}
