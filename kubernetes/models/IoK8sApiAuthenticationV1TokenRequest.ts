import type { IoK8sApiAuthenticationV1TokenRequestSpec } from './IoK8sApiAuthenticationV1TokenRequestSpec';
import type { IoK8sApiAuthenticationV1TokenRequestStatus } from './IoK8sApiAuthenticationV1TokenRequestStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/** TokenRequest requests a token for a given service account. */
export interface IoK8sApiAuthenticationV1TokenRequest {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec holds information about the request being evaluated */
  spec: IoK8sApiAuthenticationV1TokenRequestSpec;
  /** Status is filled in by the server and indicates whether the token can be authenticated. */
  status?: IoK8sApiAuthenticationV1TokenRequestStatus;
}
