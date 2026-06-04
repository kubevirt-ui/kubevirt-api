import type { IoK8sApiCoreV1ConfigMapKeySelector } from './IoK8sApiCoreV1ConfigMapKeySelector';
import type { IoK8sApiCoreV1ObjectFieldSelector } from './IoK8sApiCoreV1ObjectFieldSelector';
import type { IoK8sApiCoreV1ResourceFieldSelector } from './IoK8sApiCoreV1ResourceFieldSelector';
import type { IoK8sApiCoreV1SecretKeySelector } from './IoK8sApiCoreV1SecretKeySelector';

/** EnvVarSource represents a source for the value of an EnvVar. */
export interface IoK8sApiCoreV1EnvVarSource {
  /** Selects a key of a ConfigMap. */
  configMapKeyRef?: IoK8sApiCoreV1ConfigMapKeySelector;
  /** Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
  fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
  /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
  resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;
  /** Selects a key of a secret in the pod's namespace */
  secretKeyRef?: IoK8sApiCoreV1SecretKeySelector;
}
