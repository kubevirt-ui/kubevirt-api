import type { IoK8sApiDiscoveryV1EndpointSlice } from './IoK8sApiDiscoveryV1EndpointSlice';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/** EndpointSliceList represents a list of endpoint slices */
export interface IoK8sApiDiscoveryV1EndpointSliceList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** items is the list of endpoint slices */
  items: IoK8sApiDiscoveryV1EndpointSlice[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
