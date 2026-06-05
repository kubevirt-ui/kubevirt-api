import type { K8sIoApiCoreV1PersistentVolumeClaimSpec } from './K8sIoApiCoreV1PersistentVolumeClaimSpec';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';

export interface V1beta1PersistentVolumeClaim {
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   * @default {}
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   * @default {}
   */
  spec?: K8sIoApiCoreV1PersistentVolumeClaimSpec;
}
