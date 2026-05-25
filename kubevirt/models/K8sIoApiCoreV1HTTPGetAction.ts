import type { K8sIoApiCoreV1HTTPHeader } from './K8sIoApiCoreV1HTTPHeader';

export interface K8sIoApiCoreV1HTTPGetAction {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  host?: string;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: K8sIoApiCoreV1HTTPHeader[];
  /** Path to access on the HTTP server. */
  path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: string | number;
  /**
   * Scheme to use for connecting to the host. Defaults to HTTP.
   *
   * Possible enum values:
   *  - `"HTTP"` means that the scheme used will be http://
   *  - `"HTTPS"` means that the scheme used will be https://
   */
  scheme?: "HTTP" | "HTTPS";
}
