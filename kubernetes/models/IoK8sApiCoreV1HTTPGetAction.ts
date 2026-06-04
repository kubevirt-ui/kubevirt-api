import type { IoK8sApiCoreV1HTTPHeader } from './IoK8sApiCoreV1HTTPHeader';
import type { IoK8sApimachineryPkgUtilIntstrIntOrString } from './IoK8sApimachineryPkgUtilIntstrIntOrString';

/** HTTPGetAction describes an action based on HTTP Get requests. */
export interface IoK8sApiCoreV1HTTPGetAction {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  host?: string;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: IoK8sApiCoreV1HTTPHeader[];
  /** Path to access on the HTTP server. */
  path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: IoK8sApimachineryPkgUtilIntstrIntOrString;
  /** Scheme to use for connecting to the host. Defaults to HTTP. */
  scheme?: string;
}
