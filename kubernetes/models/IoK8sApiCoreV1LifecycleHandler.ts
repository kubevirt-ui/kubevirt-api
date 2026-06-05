import type { IoK8sApiCoreV1ExecAction } from './IoK8sApiCoreV1ExecAction';
import type { IoK8sApiCoreV1HTTPGetAction } from './IoK8sApiCoreV1HTTPGetAction';
import type { IoK8sApiCoreV1SleepAction } from './IoK8sApiCoreV1SleepAction';
import type { IoK8sApiCoreV1TCPSocketAction } from './IoK8sApiCoreV1TCPSocketAction';

/** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
export interface IoK8sApiCoreV1LifecycleHandler {
  /** Exec specifies a command to execute in the container. */
  exec?: IoK8sApiCoreV1ExecAction;
  /** HTTPGet specifies an HTTP GET request to perform. */
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  /** Sleep represents a duration that the container should sleep. */
  sleep?: IoK8sApiCoreV1SleepAction;
  /** Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for backward compatibility. There is no validation of this field and lifecycle hooks will fail at runtime when it is specified. */
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
}
