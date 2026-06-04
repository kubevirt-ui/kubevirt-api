/** ScaleSpec describes the attributes of a scale subresource. */
export interface IoK8sApiAutoscalingV1ScaleSpec {
  /**
   * replicas is the desired number of instances for the scaled object.
   * @format int32
   */
  replicas?: number;
}
