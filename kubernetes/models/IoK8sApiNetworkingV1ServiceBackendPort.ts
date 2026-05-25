export interface IoK8sApiNetworkingV1ServiceBackendPort {
  /** name is the name of the port on the Service. This is a mutually exclusive setting with "Number". */
  name?: string;
  /**
   * number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".
   * @format int32
   */
  number?: number;
}
