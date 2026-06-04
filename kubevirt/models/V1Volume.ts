import type { V1CloudInitConfigDriveSource } from './V1CloudInitConfigDriveSource';
import type { V1CloudInitNoCloudSource } from './V1CloudInitNoCloudSource';
import type { V1ConfigMapVolumeSource } from './V1ConfigMapVolumeSource';
import type { V1ContainerDiskSource } from './V1ContainerDiskSource';
import type { V1ContainerPathVolumeSource } from './V1ContainerPathVolumeSource';
import type { V1DataVolumeSource } from './V1DataVolumeSource';
import type { V1DownwardAPIVolumeSource } from './V1DownwardAPIVolumeSource';
import type { V1DownwardMetricsVolumeSource } from './V1DownwardMetricsVolumeSource';
import type { V1EmptyDiskSource } from './V1EmptyDiskSource';
import type { V1EphemeralVolumeSource } from './V1EphemeralVolumeSource';
import type { V1HostDisk } from './V1HostDisk';
import type { V1MemoryDumpVolumeSource } from './V1MemoryDumpVolumeSource';
import type { V1PersistentVolumeClaimVolumeSource } from './V1PersistentVolumeClaimVolumeSource';
import type { V1SecretVolumeSource } from './V1SecretVolumeSource';
import type { V1ServiceAccountVolumeSource } from './V1ServiceAccountVolumeSource';
import type { V1SysprepSource } from './V1SysprepSource';

/** Volume represents a named volume in a vmi. */
export interface V1Volume {
  /** CloudInitConfigDrive represents a cloud-init Config Drive user-data source. The Config Drive data will be added as a disk to the vmi. A proper cloud-init installation is required inside the guest. More info: https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html */
  cloudInitConfigDrive?: V1CloudInitConfigDriveSource;
  /** CloudInitNoCloud represents a cloud-init NoCloud user-data source. The NoCloud data will be added as a disk to the vmi. A proper cloud-init installation is required inside the guest. More info: http://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html */
  cloudInitNoCloud?: V1CloudInitNoCloudSource;
  /** ConfigMapSource represents a reference to a ConfigMap in the same namespace. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/ */
  configMap?: V1ConfigMapVolumeSource;
  /** ContainerDisk references a docker image, embedding a qcow or raw disk. More info: https://kubevirt.gitbooks.io/user-guide/registry-disk.html */
  containerDisk?: V1ContainerDiskSource;
  /** ContainerPath exposes a path from the virt-launcher container to the VM via virtiofs. The path must correspond to an existing volumeMount in the compute container. */
  containerPath?: V1ContainerPathVolumeSource;
  /** DataVolume represents the dynamic creation a PVC for this volume as well as the process of populating that PVC with a disk image. */
  dataVolume?: V1DataVolumeSource;
  /** DownwardAPI represents downward API about the pod that should populate this volume */
  downwardAPI?: V1DownwardAPIVolumeSource;
  /** DownwardMetrics adds a very small disk to VMIs which contains a limited view of host and guest metrics. The disk content is compatible with vhostmd (https://github.com/vhostmd/vhostmd) and vm-dump-metrics. */
  downwardMetrics?: V1DownwardMetricsVolumeSource;
  /** EmptyDisk represents a temporary disk which shares the vmis lifecycle. More info: https://kubevirt.gitbooks.io/user-guide/disks-and-volumes.html */
  emptyDisk?: V1EmptyDiskSource;
  /** Ephemeral is a special volume source that "wraps" specified source and provides copy-on-write image on top of it. */
  ephemeral?: V1EphemeralVolumeSource;
  /** HostDisk represents a disk created on the cluster level */
  hostDisk?: V1HostDisk;
  /** MemoryDump is attached to the virt launcher and is populated with a memory dump of the vmi */
  memoryDump?: V1MemoryDumpVolumeSource;
  /**
   * Volume's name. Must be a DNS_LABEL and unique within the vmi. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @default ""
   */
  name: string;
  /** PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. Directly attached to the vmi via qemu. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
  /** SecretVolumeSource represents a reference to a secret data in the same namespace. More info: https://kubernetes.io/docs/concepts/configuration/secret/ */
  secret?: V1SecretVolumeSource;
  /** ServiceAccountVolumeSource represents a reference to a service account. There can only be one volume of this type! More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  serviceAccount?: V1ServiceAccountVolumeSource;
  /** Represents a Sysprep volume source. */
  sysprep?: V1SysprepSource;
}
