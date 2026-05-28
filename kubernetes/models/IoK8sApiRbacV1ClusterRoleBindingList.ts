import type { IoK8sApiRbacV1ClusterRoleBinding } from './IoK8sApiRbacV1ClusterRoleBinding';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiRbacV1ClusterRoleBindingList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Items is a list of ClusterRoleBindings */
  items: IoK8sApiRbacV1ClusterRoleBinding[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
