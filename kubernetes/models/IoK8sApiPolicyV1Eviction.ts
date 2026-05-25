import type { IoK8sApimachineryPkgApisMetaV1DeleteOptions } from './IoK8sApimachineryPkgApisMetaV1DeleteOptions';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiPolicyV1Eviction {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** DeleteOptions may be provided */
  deleteOptions?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** ObjectMeta describes the pod that is being evicted. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
}
