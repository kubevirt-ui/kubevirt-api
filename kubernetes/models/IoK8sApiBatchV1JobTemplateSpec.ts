import type { IoK8sApiBatchV1JobSpec } from './IoK8sApiBatchV1JobSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiBatchV1JobTemplateSpec {
  /** Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  spec?: IoK8sApiBatchV1JobSpec;
}
