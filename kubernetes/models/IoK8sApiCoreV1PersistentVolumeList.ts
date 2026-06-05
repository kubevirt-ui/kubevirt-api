import type { IoK8sApiCoreV1PersistentVolume } from './IoK8sApiCoreV1PersistentVolume';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/** PersistentVolumeList is a list of PersistentVolume items. */
export interface IoK8sApiCoreV1PersistentVolumeList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** items is a list of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
  items: IoK8sApiCoreV1PersistentVolume[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
