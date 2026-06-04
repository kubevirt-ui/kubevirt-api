import type { IoK8sApiCoreV1TypedLocalObjectReference } from './IoK8sApiCoreV1TypedLocalObjectReference';
import type { IoK8sApiNetworkingV1IngressServiceBackend } from './IoK8sApiNetworkingV1IngressServiceBackend';

/** IngressBackend describes all endpoints for a given service and port. */
export interface IoK8sApiNetworkingV1IngressBackend {
  /** resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service". */
  resource?: IoK8sApiCoreV1TypedLocalObjectReference;
  /** service references a service as a backend. This is a mutually exclusive setting with "Resource". */
  service?: IoK8sApiNetworkingV1IngressServiceBackend;
}
