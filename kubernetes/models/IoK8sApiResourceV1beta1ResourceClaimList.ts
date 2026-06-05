import type { IoK8sApiResourceV1beta1ResourceClaim } from './IoK8sApiResourceV1beta1ResourceClaim';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/** ResourceClaimList is a collection of claims. */
export interface IoK8sApiResourceV1beta1ResourceClaimList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Items is the list of resource claims. */
  items: IoK8sApiResourceV1beta1ResourceClaim[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
