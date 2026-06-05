import type { IoK8sApiAuthorizationV1SubjectAccessReviewSpec } from './IoK8sApiAuthorizationV1SubjectAccessReviewSpec';
import type { IoK8sApiAuthorizationV1SubjectAccessReviewStatus } from './IoK8sApiAuthorizationV1SubjectAccessReviewStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export interface IoK8sApiAuthorizationV1LocalSubjectAccessReview {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted. */
  spec: IoK8sApiAuthorizationV1SubjectAccessReviewSpec;
  /** Status is filled in by the server and indicates whether the request is allowed or not */
  status?: IoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}
