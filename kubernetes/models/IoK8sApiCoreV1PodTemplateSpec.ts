import type { IoK8sApiCoreV1PodSpec } from './IoK8sApiCoreV1PodSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1PodTemplateSpec {
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  spec?: IoK8sApiCoreV1PodSpec;
}
