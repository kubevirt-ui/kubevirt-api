export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference {
  /** name is the name of the service. Required */
  name: string;
  /** namespace is the namespace of the service. Required */
  namespace: string;
  /** path is an optional URL path at which the webhook will be contacted. */
  path?: string;
  /**
   * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
   * @format int32
   */
  port?: number;
}
