import type { IoK8sApiNetworkingV1IngressClass } from './IoK8sApiNetworkingV1IngressClass';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/** IngressClassList is a collection of IngressClasses. */
export interface IoK8sApiNetworkingV1IngressClassList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** items is the list of IngressClasses. */
  items: IoK8sApiNetworkingV1IngressClass[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
