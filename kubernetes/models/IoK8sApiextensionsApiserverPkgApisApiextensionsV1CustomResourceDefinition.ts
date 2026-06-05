import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec describes how the user wants the resources to appear */
  spec: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec;
  /** status indicates the actual state of the CustomResourceDefinition */
  status?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus;
}
