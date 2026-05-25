import type { IoK8sApiCoreV1NamespaceCondition } from './IoK8sApiCoreV1NamespaceCondition';

export interface IoK8sApiCoreV1NamespaceStatus {
  /** Represents the latest available observations of a namespace's current state. */
  conditions?: IoK8sApiCoreV1NamespaceCondition[];
  /** Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/ */
  phase?: string;
}
