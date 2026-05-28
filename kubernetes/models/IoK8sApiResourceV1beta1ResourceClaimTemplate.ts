import type { IoK8sApiResourceV1beta1ResourceClaimTemplateSpec } from './IoK8sApiResourceV1beta1ResourceClaimTemplateSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiResourceV1beta1ResourceClaimTemplate {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Describes the ResourceClaim that is to be generated.
   *
   * This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.
   */
  spec: IoK8sApiResourceV1beta1ResourceClaimTemplateSpec;
}
