import type { IoK8sApiCoreV1PersistentVolumeClaimSpec } from './IoK8sApiCoreV1PersistentVolumeClaimSpec';
import type { IoK8sApiCoreV1PersistentVolumeClaimStatus } from './IoK8sApiCoreV1PersistentVolumeClaimStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/** PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export interface IoK8sApiCoreV1PersistentVolumeClaim {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  spec?: IoK8sApiCoreV1PersistentVolumeClaimSpec;
  /** status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  status?: IoK8sApiCoreV1PersistentVolumeClaimStatus;
}
