export interface IoK8sApiCoreV1EventSource {
  /** Component from which the event is generated. */
  component?: string;
  /** Node name on which the event is generated. */
  host?: string;
}
