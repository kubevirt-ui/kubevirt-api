export interface IoK8sApiAutoscalingV2HPAScalingPolicy {
  /**
   * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
   * @format int32
   */
  periodSeconds: number;
  /** type is used to specify the scaling policy. */
  type: string;
  /**
   * value contains the amount of change which is permitted by the policy. It must be greater than zero
   * @format int32
   */
  value: number;
}
