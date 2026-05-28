import type { IoK8sApiPolicyV1PodDisruptionBudgetSpec } from './IoK8sApiPolicyV1PodDisruptionBudgetSpec';
import type { IoK8sApiPolicyV1PodDisruptionBudgetStatus } from './IoK8sApiPolicyV1PodDisruptionBudgetStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiPolicyV1PodDisruptionBudget {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Specification of the desired behavior of the PodDisruptionBudget. */
  spec?: IoK8sApiPolicyV1PodDisruptionBudgetSpec;
  /** Most recently observed status of the PodDisruptionBudget. */
  status?: IoK8sApiPolicyV1PodDisruptionBudgetStatus;
}
