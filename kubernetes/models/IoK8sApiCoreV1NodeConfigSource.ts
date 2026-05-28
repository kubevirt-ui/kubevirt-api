import type { IoK8sApiCoreV1ConfigMapNodeConfigSource } from './IoK8sApiCoreV1ConfigMapNodeConfigSource';

export interface IoK8sApiCoreV1NodeConfigSource {
  /** ConfigMap is a reference to a Node's ConfigMap */
  configMap?: IoK8sApiCoreV1ConfigMapNodeConfigSource;
}
