import type { IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec } from './IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec';
import type { IoK8sApiAuthorizationV1SubjectRulesReviewStatus } from './IoK8sApiAuthorizationV1SubjectRulesReviewStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAuthorizationV1SelfSubjectRulesReview {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec holds information about the request being evaluated. */
  spec: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec;
  /** Status is filled in by the server and indicates the set of actions a user can perform. */
  status?: IoK8sApiAuthorizationV1SubjectRulesReviewStatus;
}
