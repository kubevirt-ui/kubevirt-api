import type { IoK8sApiResourceV1alpha3ResourceClaimSpec } from './IoK8sApiResourceV1alpha3ResourceClaimSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiResourceV1alpha3ResourceClaimTemplateSpec {
  /** ObjectMeta may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here. */
  spec: IoK8sApiResourceV1alpha3ResourceClaimSpec;
}
