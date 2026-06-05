import type { IoK8sApiNetworkingV1ServiceBackendPort } from './IoK8sApiNetworkingV1ServiceBackendPort';

/** IngressServiceBackend references a Kubernetes Service as a Backend. */
export interface IoK8sApiNetworkingV1IngressServiceBackend {
  /** name is the referenced service. The service must exist in the same namespace as the Ingress object. */
  name: string;
  /** port of the referenced service. A port name or port number is required for a IngressServiceBackend. */
  port?: IoK8sApiNetworkingV1ServiceBackendPort;
}
