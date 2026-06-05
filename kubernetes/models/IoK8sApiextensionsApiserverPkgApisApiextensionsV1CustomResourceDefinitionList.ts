import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** items list individual CustomResourceDefinition objects */
  items: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
