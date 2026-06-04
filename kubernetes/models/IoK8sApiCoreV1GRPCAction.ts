/** GRPCAction specifies an action involving a GRPC service. */
export interface IoK8sApiCoreV1GRPCAction {
  /**
   * Port number of the gRPC service. Number must be in the range 1 to 65535.
   * @format int32
   */
  port: number;
  /**
   * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * If this is not specified, the default behavior is defined by gRPC.
   */
  service?: string;
}
