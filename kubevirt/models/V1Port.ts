export interface V1Port {
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
  name?: string;
  /**
   * Number of port to expose for the virtual machine. This must be a valid port number, 0 < x < 65536.
   * @format int32
   * @default 0
   */
  port: number;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  protocol?: string;
}
