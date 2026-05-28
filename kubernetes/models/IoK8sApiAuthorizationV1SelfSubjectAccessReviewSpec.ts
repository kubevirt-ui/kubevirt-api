import type { IoK8sApiAuthorizationV1NonResourceAttributes } from './IoK8sApiAuthorizationV1NonResourceAttributes';
import type { IoK8sApiAuthorizationV1ResourceAttributes } from './IoK8sApiAuthorizationV1ResourceAttributes';

export interface IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec {
  /** NonResourceAttributes describes information for a non-resource access request */
  nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
  /** ResourceAuthorizationAttributes describes information for a resource access request */
  resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;
}
