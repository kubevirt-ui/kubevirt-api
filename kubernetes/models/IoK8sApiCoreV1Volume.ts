import type { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from './IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import type { IoK8sApiCoreV1AzureDiskVolumeSource } from './IoK8sApiCoreV1AzureDiskVolumeSource';
import type { IoK8sApiCoreV1AzureFileVolumeSource } from './IoK8sApiCoreV1AzureFileVolumeSource';
import type { IoK8sApiCoreV1CSIVolumeSource } from './IoK8sApiCoreV1CSIVolumeSource';
import type { IoK8sApiCoreV1CephFSVolumeSource } from './IoK8sApiCoreV1CephFSVolumeSource';
import type { IoK8sApiCoreV1CinderVolumeSource } from './IoK8sApiCoreV1CinderVolumeSource';
import type { IoK8sApiCoreV1ConfigMapVolumeSource } from './IoK8sApiCoreV1ConfigMapVolumeSource';
import type { IoK8sApiCoreV1DownwardAPIVolumeSource } from './IoK8sApiCoreV1DownwardAPIVolumeSource';
import type { IoK8sApiCoreV1EmptyDirVolumeSource } from './IoK8sApiCoreV1EmptyDirVolumeSource';
import type { IoK8sApiCoreV1EphemeralVolumeSource } from './IoK8sApiCoreV1EphemeralVolumeSource';
import type { IoK8sApiCoreV1FCVolumeSource } from './IoK8sApiCoreV1FCVolumeSource';
import type { IoK8sApiCoreV1FlexVolumeSource } from './IoK8sApiCoreV1FlexVolumeSource';
import type { IoK8sApiCoreV1FlockerVolumeSource } from './IoK8sApiCoreV1FlockerVolumeSource';
import type { IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from './IoK8sApiCoreV1GCEPersistentDiskVolumeSource';
import type { IoK8sApiCoreV1GitRepoVolumeSource } from './IoK8sApiCoreV1GitRepoVolumeSource';
import type { IoK8sApiCoreV1GlusterfsVolumeSource } from './IoK8sApiCoreV1GlusterfsVolumeSource';
import type { IoK8sApiCoreV1HostPathVolumeSource } from './IoK8sApiCoreV1HostPathVolumeSource';
import type { IoK8sApiCoreV1ISCSIVolumeSource } from './IoK8sApiCoreV1ISCSIVolumeSource';
import type { IoK8sApiCoreV1ImageVolumeSource } from './IoK8sApiCoreV1ImageVolumeSource';
import type { IoK8sApiCoreV1NFSVolumeSource } from './IoK8sApiCoreV1NFSVolumeSource';
import type { IoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from './IoK8sApiCoreV1PersistentVolumeClaimVolumeSource';
import type { IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from './IoK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import type { IoK8sApiCoreV1PortworxVolumeSource } from './IoK8sApiCoreV1PortworxVolumeSource';
import type { IoK8sApiCoreV1ProjectedVolumeSource } from './IoK8sApiCoreV1ProjectedVolumeSource';
import type { IoK8sApiCoreV1QuobyteVolumeSource } from './IoK8sApiCoreV1QuobyteVolumeSource';
import type { IoK8sApiCoreV1RBDVolumeSource } from './IoK8sApiCoreV1RBDVolumeSource';
import type { IoK8sApiCoreV1ScaleIOVolumeSource } from './IoK8sApiCoreV1ScaleIOVolumeSource';
import type { IoK8sApiCoreV1SecretVolumeSource } from './IoK8sApiCoreV1SecretVolumeSource';
import type { IoK8sApiCoreV1StorageOSVolumeSource } from './IoK8sApiCoreV1StorageOSVolumeSource';
import type { IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from './IoK8sApiCoreV1VsphereVirtualDiskVolumeSource';

export interface IoK8sApiCoreV1Volume {
  /** awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  awsElasticBlockStore?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
  /** azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver. */
  azureDisk?: IoK8sApiCoreV1AzureDiskVolumeSource;
  /** azureFile represents an Azure File Service mount on the host and bind mount to the pod. Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver. */
  azureFile?: IoK8sApiCoreV1AzureFileVolumeSource;
  /** cephFS represents a Ceph FS mount on the host that shares a pod's lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported. */
  cephfs?: IoK8sApiCoreV1CephFSVolumeSource;
  /** cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  cinder?: IoK8sApiCoreV1CinderVolumeSource;
  /** configMap represents a configMap that should populate this volume */
  configMap?: IoK8sApiCoreV1ConfigMapVolumeSource;
  /** csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers. */
  csi?: IoK8sApiCoreV1CSIVolumeSource;
  /** downwardAPI represents downward API about the pod that should populate this volume */
  downwardAPI?: IoK8sApiCoreV1DownwardAPIVolumeSource;
  /** emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  emptyDir?: IoK8sApiCoreV1EmptyDirVolumeSource;
  /**
   * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.
   *
   * Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity
   *    tracking are needed,
   * c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through
   *    a PersistentVolumeClaim (see EphemeralVolumeSource for more
   *    information on the connection between this volume type
   *    and PersistentVolumeClaim).
   *
   * Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.
   *
   * Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.
   *
   * A pod can use both types of ephemeral volumes and persistent volumes at the same time.
   */
  ephemeral?: IoK8sApiCoreV1EphemeralVolumeSource;
  /** fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
  fc?: IoK8sApiCoreV1FCVolumeSource;
  /** flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead. */
  flexVolume?: IoK8sApiCoreV1FlexVolumeSource;
  /** flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported. */
  flocker?: IoK8sApiCoreV1FlockerVolumeSource;
  /** gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  gcePersistentDisk?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
  /** gitRepo represents a git repository at a particular revision. Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
  gitRepo?: IoK8sApiCoreV1GitRepoVolumeSource;
  /** glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md */
  glusterfs?: IoK8sApiCoreV1GlusterfsVolumeSource;
  /** hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  hostPath?: IoK8sApiCoreV1HostPathVolumeSource;
  /**
   * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided:
   *
   * - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
   *
   * The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath) before 1.33. The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
   */
  image?: IoK8sApiCoreV1ImageVolumeSource;
  /** iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md */
  iscsi?: IoK8sApiCoreV1ISCSIVolumeSource;
  /** name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name: string;
  /** nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  nfs?: IoK8sApiCoreV1NFSVolumeSource;
  /** persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  persistentVolumeClaim?: IoK8sApiCoreV1PersistentVolumeClaimVolumeSource;
  /** photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported. */
  photonPersistentDisk?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
  /** portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate is on. */
  portworxVolume?: IoK8sApiCoreV1PortworxVolumeSource;
  /** projected items for all in one resources secrets, configmaps, and downward API */
  projected?: IoK8sApiCoreV1ProjectedVolumeSource;
  /** quobyte represents a Quobyte mount on the host that shares a pod's lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported. */
  quobyte?: IoK8sApiCoreV1QuobyteVolumeSource;
  /** rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md */
  rbd?: IoK8sApiCoreV1RBDVolumeSource;
  /** scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported. */
  scaleIO?: IoK8sApiCoreV1ScaleIOVolumeSource;
  /** secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  secret?: IoK8sApiCoreV1SecretVolumeSource;
  /** storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. */
  storageos?: IoK8sApiCoreV1StorageOSVolumeSource;
  /** vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver. */
  vsphereVolume?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}
