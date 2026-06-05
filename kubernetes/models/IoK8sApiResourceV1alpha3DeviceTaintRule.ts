import type { IoK8sApiResourceV1alpha3DeviceTaintRuleSpec } from './IoK8sApiResourceV1alpha3DeviceTaintRuleSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/** DeviceTaintRule adds one taint to all devices which match the selector. This has the same effect as if the taint was specified directly in the ResourceSlice by the DRA driver. */
export interface IoK8sApiResourceV1alpha3DeviceTaintRule {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Spec specifies the selector and one taint.
   *
   * Changing the spec automatically increments the metadata.generation number.
   */
  spec: IoK8sApiResourceV1alpha3DeviceTaintRuleSpec;
}
