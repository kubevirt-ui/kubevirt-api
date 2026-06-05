import type { K8sIoApimachineryPkgApisMetaV1APIGroup } from './K8sIoApimachineryPkgApisMetaV1APIGroup';

/** APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export interface K8sIoApimachineryPkgApisMetaV1APIGroupList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** groups is a list of APIGroup. */
  groups: K8sIoApimachineryPkgApisMetaV1APIGroup[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
}
