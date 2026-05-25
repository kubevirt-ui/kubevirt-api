import type { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from './IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import type { IoK8sApiCoreV1AzureDiskVolumeSource } from './IoK8sApiCoreV1AzureDiskVolumeSource';
import type { IoK8sApiCoreV1AzureFilePersistentVolumeSource } from './IoK8sApiCoreV1AzureFilePersistentVolumeSource';
import type { IoK8sApiCoreV1CSIPersistentVolumeSource } from './IoK8sApiCoreV1CSIPersistentVolumeSource';
import type { IoK8sApiCoreV1CephFSPersistentVolumeSource } from './IoK8sApiCoreV1CephFSPersistentVolumeSource';
import type { IoK8sApiCoreV1CinderPersistentVolumeSource } from './IoK8sApiCoreV1CinderPersistentVolumeSource';
import type { IoK8sApiCoreV1FCVolumeSource } from './IoK8sApiCoreV1FCVolumeSource';
import type { IoK8sApiCoreV1FlexPersistentVolumeSource } from './IoK8sApiCoreV1FlexPersistentVolumeSource';
import type { IoK8sApiCoreV1FlockerVolumeSource } from './IoK8sApiCoreV1FlockerVolumeSource';
import type { IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from './IoK8sApiCoreV1GCEPersistentDiskVolumeSource';
import type { IoK8sApiCoreV1GlusterfsPersistentVolumeSource } from './IoK8sApiCoreV1GlusterfsPersistentVolumeSource';
import type { IoK8sApiCoreV1HostPathVolumeSource } from './IoK8sApiCoreV1HostPathVolumeSource';
import type { IoK8sApiCoreV1ISCSIPersistentVolumeSource } from './IoK8sApiCoreV1ISCSIPersistentVolumeSource';
import type { IoK8sApiCoreV1LocalVolumeSource } from './IoK8sApiCoreV1LocalVolumeSource';
import type { IoK8sApiCoreV1NFSVolumeSource } from './IoK8sApiCoreV1NFSVolumeSource';
import type { IoK8sApiCoreV1ObjectReference } from './IoK8sApiCoreV1ObjectReference';
import type { IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from './IoK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import type { IoK8sApiCoreV1PortworxVolumeSource } from './IoK8sApiCoreV1PortworxVolumeSource';
import type { IoK8sApiCoreV1QuobyteVolumeSource } from './IoK8sApiCoreV1QuobyteVolumeSource';
import type { IoK8sApiCoreV1RBDPersistentVolumeSource } from './IoK8sApiCoreV1RBDPersistentVolumeSource';
import type { IoK8sApiCoreV1ScaleIOPersistentVolumeSource } from './IoK8sApiCoreV1ScaleIOPersistentVolumeSource';
import type { IoK8sApiCoreV1StorageOSPersistentVolumeSource } from './IoK8sApiCoreV1StorageOSPersistentVolumeSource';
import type { IoK8sApiCoreV1VolumeNodeAffinity } from './IoK8sApiCoreV1VolumeNodeAffinity';
import type { IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from './IoK8sApiCoreV1VsphereVirtualDiskVolumeSource';
import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

export interface IoK8sApiCoreV1PersistentVolumeSpec {
  /** accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes */
  accessModes?: string[];
  /** awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  awsElasticBlockStore?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
  /** azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver. */
  azureDisk?: IoK8sApiCoreV1AzureDiskVolumeSource;
  /** azureFile represents an Azure File Service mount on the host and bind mount to the pod. Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver. */
  azureFile?: IoK8sApiCoreV1AzureFilePersistentVolumeSource;
  /** capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity */
  capacity?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
  /** cephFS represents a Ceph FS mount on the host that shares a pod's lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported. */
  cephfs?: IoK8sApiCoreV1CephFSPersistentVolumeSource;
  /** cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  cinder?: IoK8sApiCoreV1CinderPersistentVolumeSource;
  /** claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding */
  claimRef?: IoK8sApiCoreV1ObjectReference;
  /** csi represents storage that is handled by an external CSI driver. */
  csi?: IoK8sApiCoreV1CSIPersistentVolumeSource;
  /** fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
  fc?: IoK8sApiCoreV1FCVolumeSource;
  /** flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead. */
  flexVolume?: IoK8sApiCoreV1FlexPersistentVolumeSource;
  /** flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported. */
  flocker?: IoK8sApiCoreV1FlockerVolumeSource;
  /** gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  gcePersistentDisk?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
  /** glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md */
  glusterfs?: IoK8sApiCoreV1GlusterfsPersistentVolumeSource;
  /** hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  hostPath?: IoK8sApiCoreV1HostPathVolumeSource;
  /** iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. */
  iscsi?: IoK8sApiCoreV1ISCSIPersistentVolumeSource;
  /** local represents directly-attached storage with node affinity */
  local?: IoK8sApiCoreV1LocalVolumeSource;
  /** mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options */
  mountOptions?: string[];
  /** nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  nfs?: IoK8sApiCoreV1NFSVolumeSource;
  /** nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume. */
  nodeAffinity?: IoK8sApiCoreV1VolumeNodeAffinity;
  /** persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming */
  persistentVolumeReclaimPolicy?: string;
  /** photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported. */
  photonPersistentDisk?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
  /** portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate is on. */
  portworxVolume?: IoK8sApiCoreV1PortworxVolumeSource;
  /** quobyte represents a Quobyte mount on the host that shares a pod's lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported. */
  quobyte?: IoK8sApiCoreV1QuobyteVolumeSource;
  /** rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md */
  rbd?: IoK8sApiCoreV1RBDPersistentVolumeSource;
  /** scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported. */
  scaleIO?: IoK8sApiCoreV1ScaleIOPersistentVolumeSource;
  /** storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass. */
  storageClassName?: string;
  /** storageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. More info: https://examples.k8s.io/volumes/storageos/README.md */
  storageos?: IoK8sApiCoreV1StorageOSPersistentVolumeSource;
  /** Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default). */
  volumeAttributesClassName?: string;
  /** volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. */
  volumeMode?: string;
  /** vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver. */
  vsphereVolume?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}
