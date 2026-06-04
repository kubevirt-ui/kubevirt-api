import type { IoK8sApiCoreV1ConfigMapNodeConfigSource } from './IoK8sApiCoreV1ConfigMapNodeConfigSource';

/** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22 */
export interface IoK8sApiCoreV1NodeConfigSource {
  /** ConfigMap is a reference to a Node's ConfigMap */
  configMap?: IoK8sApiCoreV1ConfigMapNodeConfigSource;
}
