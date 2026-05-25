import type { K8sIoApimachineryPkgApisMetaV1APIResource } from './K8sIoApimachineryPkgApisMetaV1APIResource';

export interface K8sIoApimachineryPkgApisMetaV1APIResourceList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /**
   * groupVersion is the group and version this APIResourceList is for.
   * @default ""
   */
  groupVersion: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** resources contains the name of the resources and if they are namespaced. */
  resources: K8sIoApimachineryPkgApisMetaV1APIResource[];
}
