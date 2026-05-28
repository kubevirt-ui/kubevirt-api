import type { IoK8sApiCoreV1PersistentVolumeSpec } from './IoK8sApiCoreV1PersistentVolumeSpec';

export interface IoK8sApiStorageV1VolumeAttachmentSource {
  /** inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature. */
  inlineVolumeSpec?: IoK8sApiCoreV1PersistentVolumeSpec;
  /** persistentVolumeName represents the name of the persistent volume to attach. */
  persistentVolumeName?: string;
}
