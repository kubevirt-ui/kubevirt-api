import type { IoK8sApiStorageV1CSINodeSpec } from './IoK8sApiStorageV1CSINodeSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiStorageV1CSINode {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. metadata.name must be the Kubernetes node name. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec is the specification of CSINode */
  spec: IoK8sApiStorageV1CSINodeSpec;
}
