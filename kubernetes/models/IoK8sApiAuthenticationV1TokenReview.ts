import type { IoK8sApiAuthenticationV1TokenReviewSpec } from './IoK8sApiAuthenticationV1TokenReviewSpec';
import type { IoK8sApiAuthenticationV1TokenReviewStatus } from './IoK8sApiAuthenticationV1TokenReviewStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAuthenticationV1TokenReview {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec holds information about the request being evaluated */
  spec: IoK8sApiAuthenticationV1TokenReviewSpec;
  /** Status is filled in by the server and indicates whether the request can be authenticated. */
  status?: IoK8sApiAuthenticationV1TokenReviewStatus;
}
