import type { IoK8sApiCoreV1LocalObjectReference } from './IoK8sApiCoreV1LocalObjectReference';

export interface IoK8sApiCoreV1CinderVolumeSource {
  /** fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  fsType?: string;
  /** readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  readOnly?: boolean;
  /** secretRef is optional: points to a secret object containing parameters used to connect to OpenStack. */
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  /** volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  volumeID: string;
}
