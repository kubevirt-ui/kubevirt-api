import type { K8sIoApiCoreV1PersistentVolumeClaimVolumeSource } from './K8sIoApiCoreV1PersistentVolumeClaimVolumeSource';

export interface V1EphemeralVolumeSource {
  /** PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. Directly attached to the vmi via qemu. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  persistentVolumeClaim?: K8sIoApiCoreV1PersistentVolumeClaimVolumeSource;
}
