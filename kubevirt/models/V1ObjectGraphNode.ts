import type { K8sIoApiCoreV1TypedObjectReference } from './K8sIoApiCoreV1TypedObjectReference';

/** ObjectGraphNode represents an individual node in the graph. */
export interface V1ObjectGraphNode {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  children?: V1ObjectGraphNode[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  labels?: Record<string, string>;
  /**
   * TypedObjectReference contains enough information to let you locate the typed referenced object
   * @default {}
   */
  objectReference: K8sIoApiCoreV1TypedObjectReference;
  optional?: boolean;
}
