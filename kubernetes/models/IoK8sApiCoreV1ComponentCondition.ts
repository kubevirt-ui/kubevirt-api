export interface IoK8sApiCoreV1ComponentCondition {
  /** Condition error code for a component. For example, a health check error code. */
  error?: string;
  /** Message about the condition for a component. For example, information about a health check. */
  message?: string;
  /** Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown". */
  status: string;
  /** Type of condition for a component. Valid value: "Healthy" */
  type: string;
}
