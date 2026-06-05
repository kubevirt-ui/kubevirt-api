import type { IoK8sApiCoreV1PersistentVolumeClaimSpec } from './IoK8sApiCoreV1PersistentVolumeClaimSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export interface IoK8sApiCoreV1PersistentVolumeClaimTemplate {
  /** May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here. */
  spec: IoK8sApiCoreV1PersistentVolumeClaimSpec;
}
