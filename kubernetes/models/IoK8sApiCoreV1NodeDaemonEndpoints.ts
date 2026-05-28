import type { IoK8sApiCoreV1DaemonEndpoint } from './IoK8sApiCoreV1DaemonEndpoint';

export interface IoK8sApiCoreV1NodeDaemonEndpoints {
  /** Endpoint on which Kubelet is listening. */
  kubeletEndpoint?: IoK8sApiCoreV1DaemonEndpoint;
}
