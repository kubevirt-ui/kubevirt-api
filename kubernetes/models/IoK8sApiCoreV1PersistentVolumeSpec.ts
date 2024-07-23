/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource,
  IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceFromJSON,
  IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceToJSON,
  IoK8sApiCoreV1AzureDiskVolumeSource,
  IoK8sApiCoreV1AzureDiskVolumeSourceFromJSON,
  IoK8sApiCoreV1AzureDiskVolumeSourceToJSON,
  IoK8sApiCoreV1AzureFilePersistentVolumeSource,
  IoK8sApiCoreV1AzureFilePersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1AzureFilePersistentVolumeSourceToJSON,
  IoK8sApiCoreV1CSIPersistentVolumeSource,
  IoK8sApiCoreV1CSIPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1CSIPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1CephFSPersistentVolumeSource,
  IoK8sApiCoreV1CephFSPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1CephFSPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1CinderPersistentVolumeSource,
  IoK8sApiCoreV1CinderPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1CinderPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1FCVolumeSource,
  IoK8sApiCoreV1FCVolumeSourceFromJSON,
  IoK8sApiCoreV1FCVolumeSourceToJSON,
  IoK8sApiCoreV1FlexPersistentVolumeSource,
  IoK8sApiCoreV1FlexPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1FlexPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1FlockerVolumeSource,
  IoK8sApiCoreV1FlockerVolumeSourceFromJSON,
  IoK8sApiCoreV1FlockerVolumeSourceToJSON,
  IoK8sApiCoreV1GCEPersistentDiskVolumeSource,
  IoK8sApiCoreV1GCEPersistentDiskVolumeSourceFromJSON,
  IoK8sApiCoreV1GCEPersistentDiskVolumeSourceToJSON,
  IoK8sApiCoreV1GlusterfsPersistentVolumeSource,
  IoK8sApiCoreV1GlusterfsPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1GlusterfsPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1HostPathVolumeSource,
  IoK8sApiCoreV1HostPathVolumeSourceFromJSON,
  IoK8sApiCoreV1HostPathVolumeSourceToJSON,
  IoK8sApiCoreV1ISCSIPersistentVolumeSource,
  IoK8sApiCoreV1ISCSIPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1ISCSIPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1LocalVolumeSource,
  IoK8sApiCoreV1LocalVolumeSourceFromJSON,
  IoK8sApiCoreV1LocalVolumeSourceToJSON,
  IoK8sApiCoreV1NFSVolumeSource,
  IoK8sApiCoreV1NFSVolumeSourceFromJSON,
  IoK8sApiCoreV1NFSVolumeSourceToJSON,
  IoK8sApiCoreV1ObjectReference,
  IoK8sApiCoreV1ObjectReferenceFromJSON,
  IoK8sApiCoreV1ObjectReferenceToJSON,
  IoK8sApiCoreV1PhotonPersistentDiskVolumeSource,
  IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceFromJSON,
  IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceToJSON,
  IoK8sApiCoreV1PortworxVolumeSource,
  IoK8sApiCoreV1PortworxVolumeSourceFromJSON,
  IoK8sApiCoreV1PortworxVolumeSourceToJSON,
  IoK8sApiCoreV1QuobyteVolumeSource,
  IoK8sApiCoreV1QuobyteVolumeSourceFromJSON,
  IoK8sApiCoreV1QuobyteVolumeSourceToJSON,
  IoK8sApiCoreV1RBDPersistentVolumeSource,
  IoK8sApiCoreV1RBDPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1RBDPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1ScaleIOPersistentVolumeSource,
  IoK8sApiCoreV1ScaleIOPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1ScaleIOPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1StorageOSPersistentVolumeSource,
  IoK8sApiCoreV1StorageOSPersistentVolumeSourceFromJSON,
  IoK8sApiCoreV1StorageOSPersistentVolumeSourceToJSON,
  IoK8sApiCoreV1VolumeNodeAffinity,
  IoK8sApiCoreV1VolumeNodeAffinityFromJSON,
  IoK8sApiCoreV1VolumeNodeAffinityToJSON,
  IoK8sApiCoreV1VsphereVirtualDiskVolumeSource,
  IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceFromJSON,
  IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceToJSON,
} from './';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeSpec
 */
export interface IoK8sApiCoreV1PersistentVolumeSpec {
  /**
   * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
   * @type {Array<string>}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  accessModes?: Array<string>;
  /**
   *
   * @type {IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  awsElasticBlockStore?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1AzureDiskVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  azureDisk?: IoK8sApiCoreV1AzureDiskVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1AzureFilePersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  azureFile?: IoK8sApiCoreV1AzureFilePersistentVolumeSource;
  /**
   * capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  capacity?: { [key: string]: string };
  /**
   *
   * @type {IoK8sApiCoreV1CephFSPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  cephfs?: IoK8sApiCoreV1CephFSPersistentVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1CinderPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  cinder?: IoK8sApiCoreV1CinderPersistentVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1ObjectReference}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  claimRef?: IoK8sApiCoreV1ObjectReference;
  /**
   *
   * @type {IoK8sApiCoreV1CSIPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  csi?: IoK8sApiCoreV1CSIPersistentVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1FCVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  fc?: IoK8sApiCoreV1FCVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1FlexPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  flexVolume?: IoK8sApiCoreV1FlexPersistentVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1FlockerVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  flocker?: IoK8sApiCoreV1FlockerVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1GCEPersistentDiskVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  gcePersistentDisk?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1GlusterfsPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  glusterfs?: IoK8sApiCoreV1GlusterfsPersistentVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1HostPathVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  hostPath?: IoK8sApiCoreV1HostPathVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1ISCSIPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  iscsi?: IoK8sApiCoreV1ISCSIPersistentVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1LocalVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  local?: IoK8sApiCoreV1LocalVolumeSource;
  /**
   * mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
   * @type {Array<string>}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  mountOptions?: Array<string>;
  /**
   *
   * @type {IoK8sApiCoreV1NFSVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  nfs?: IoK8sApiCoreV1NFSVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1VolumeNodeAffinity}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  nodeAffinity?: IoK8sApiCoreV1VolumeNodeAffinity;
  /**
   * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  persistentVolumeReclaimPolicy?: string;
  /**
   *
   * @type {IoK8sApiCoreV1PhotonPersistentDiskVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  photonPersistentDisk?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1PortworxVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  portworxVolume?: IoK8sApiCoreV1PortworxVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1QuobyteVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  quobyte?: IoK8sApiCoreV1QuobyteVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1RBDPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  rbd?: IoK8sApiCoreV1RBDPersistentVolumeSource;
  /**
   *
   * @type {IoK8sApiCoreV1ScaleIOPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  scaleIO?: IoK8sApiCoreV1ScaleIOPersistentVolumeSource;
  /**
   * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  storageClassName?: string;
  /**
   *
   * @type {IoK8sApiCoreV1StorageOSPersistentVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  storageos?: IoK8sApiCoreV1StorageOSPersistentVolumeSource;
  /**
   * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  volumeAttributesClassName?: string;
  /**
   * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  volumeMode?: string;
  /**
   *
   * @type {IoK8sApiCoreV1VsphereVirtualDiskVolumeSource}
   * @memberof IoK8sApiCoreV1PersistentVolumeSpec
   */
  vsphereVolume?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}

export function IoK8sApiCoreV1PersistentVolumeSpecFromJSON(
  json: any,
): IoK8sApiCoreV1PersistentVolumeSpec {
  return IoK8sApiCoreV1PersistentVolumeSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PersistentVolumeSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accessModes: !exists(json, 'accessModes') ? undefined : json['accessModes'],
    awsElasticBlockStore: !exists(json, 'awsElasticBlockStore')
      ? undefined
      : IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceFromJSON(json['awsElasticBlockStore']),
    azureDisk: !exists(json, 'azureDisk')
      ? undefined
      : IoK8sApiCoreV1AzureDiskVolumeSourceFromJSON(json['azureDisk']),
    azureFile: !exists(json, 'azureFile')
      ? undefined
      : IoK8sApiCoreV1AzureFilePersistentVolumeSourceFromJSON(json['azureFile']),
    capacity: !exists(json, 'capacity') ? undefined : json['capacity'],
    cephfs: !exists(json, 'cephfs')
      ? undefined
      : IoK8sApiCoreV1CephFSPersistentVolumeSourceFromJSON(json['cephfs']),
    cinder: !exists(json, 'cinder')
      ? undefined
      : IoK8sApiCoreV1CinderPersistentVolumeSourceFromJSON(json['cinder']),
    claimRef: !exists(json, 'claimRef')
      ? undefined
      : IoK8sApiCoreV1ObjectReferenceFromJSON(json['claimRef']),
    csi: !exists(json, 'csi')
      ? undefined
      : IoK8sApiCoreV1CSIPersistentVolumeSourceFromJSON(json['csi']),
    fc: !exists(json, 'fc') ? undefined : IoK8sApiCoreV1FCVolumeSourceFromJSON(json['fc']),
    flexVolume: !exists(json, 'flexVolume')
      ? undefined
      : IoK8sApiCoreV1FlexPersistentVolumeSourceFromJSON(json['flexVolume']),
    flocker: !exists(json, 'flocker')
      ? undefined
      : IoK8sApiCoreV1FlockerVolumeSourceFromJSON(json['flocker']),
    gcePersistentDisk: !exists(json, 'gcePersistentDisk')
      ? undefined
      : IoK8sApiCoreV1GCEPersistentDiskVolumeSourceFromJSON(json['gcePersistentDisk']),
    glusterfs: !exists(json, 'glusterfs')
      ? undefined
      : IoK8sApiCoreV1GlusterfsPersistentVolumeSourceFromJSON(json['glusterfs']),
    hostPath: !exists(json, 'hostPath')
      ? undefined
      : IoK8sApiCoreV1HostPathVolumeSourceFromJSON(json['hostPath']),
    iscsi: !exists(json, 'iscsi')
      ? undefined
      : IoK8sApiCoreV1ISCSIPersistentVolumeSourceFromJSON(json['iscsi']),
    local: !exists(json, 'local')
      ? undefined
      : IoK8sApiCoreV1LocalVolumeSourceFromJSON(json['local']),
    mountOptions: !exists(json, 'mountOptions') ? undefined : json['mountOptions'],
    nfs: !exists(json, 'nfs') ? undefined : IoK8sApiCoreV1NFSVolumeSourceFromJSON(json['nfs']),
    nodeAffinity: !exists(json, 'nodeAffinity')
      ? undefined
      : IoK8sApiCoreV1VolumeNodeAffinityFromJSON(json['nodeAffinity']),
    persistentVolumeReclaimPolicy: !exists(json, 'persistentVolumeReclaimPolicy')
      ? undefined
      : json['persistentVolumeReclaimPolicy'],
    photonPersistentDisk: !exists(json, 'photonPersistentDisk')
      ? undefined
      : IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceFromJSON(json['photonPersistentDisk']),
    portworxVolume: !exists(json, 'portworxVolume')
      ? undefined
      : IoK8sApiCoreV1PortworxVolumeSourceFromJSON(json['portworxVolume']),
    quobyte: !exists(json, 'quobyte')
      ? undefined
      : IoK8sApiCoreV1QuobyteVolumeSourceFromJSON(json['quobyte']),
    rbd: !exists(json, 'rbd')
      ? undefined
      : IoK8sApiCoreV1RBDPersistentVolumeSourceFromJSON(json['rbd']),
    scaleIO: !exists(json, 'scaleIO')
      ? undefined
      : IoK8sApiCoreV1ScaleIOPersistentVolumeSourceFromJSON(json['scaleIO']),
    storageClassName: !exists(json, 'storageClassName') ? undefined : json['storageClassName'],
    storageos: !exists(json, 'storageos')
      ? undefined
      : IoK8sApiCoreV1StorageOSPersistentVolumeSourceFromJSON(json['storageos']),
    volumeAttributesClassName: !exists(json, 'volumeAttributesClassName')
      ? undefined
      : json['volumeAttributesClassName'],
    volumeMode: !exists(json, 'volumeMode') ? undefined : json['volumeMode'],
    vsphereVolume: !exists(json, 'vsphereVolume')
      ? undefined
      : IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceFromJSON(json['vsphereVolume']),
  };
}

export function IoK8sApiCoreV1PersistentVolumeSpecToJSON(
  value?: IoK8sApiCoreV1PersistentVolumeSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accessModes: value.accessModes,
    awsElasticBlockStore: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceToJSON(
      value.awsElasticBlockStore,
    ),
    azureDisk: IoK8sApiCoreV1AzureDiskVolumeSourceToJSON(value.azureDisk),
    azureFile: IoK8sApiCoreV1AzureFilePersistentVolumeSourceToJSON(value.azureFile),
    capacity: value.capacity,
    cephfs: IoK8sApiCoreV1CephFSPersistentVolumeSourceToJSON(value.cephfs),
    cinder: IoK8sApiCoreV1CinderPersistentVolumeSourceToJSON(value.cinder),
    claimRef: IoK8sApiCoreV1ObjectReferenceToJSON(value.claimRef),
    csi: IoK8sApiCoreV1CSIPersistentVolumeSourceToJSON(value.csi),
    fc: IoK8sApiCoreV1FCVolumeSourceToJSON(value.fc),
    flexVolume: IoK8sApiCoreV1FlexPersistentVolumeSourceToJSON(value.flexVolume),
    flocker: IoK8sApiCoreV1FlockerVolumeSourceToJSON(value.flocker),
    gcePersistentDisk: IoK8sApiCoreV1GCEPersistentDiskVolumeSourceToJSON(value.gcePersistentDisk),
    glusterfs: IoK8sApiCoreV1GlusterfsPersistentVolumeSourceToJSON(value.glusterfs),
    hostPath: IoK8sApiCoreV1HostPathVolumeSourceToJSON(value.hostPath),
    iscsi: IoK8sApiCoreV1ISCSIPersistentVolumeSourceToJSON(value.iscsi),
    local: IoK8sApiCoreV1LocalVolumeSourceToJSON(value.local),
    mountOptions: value.mountOptions,
    nfs: IoK8sApiCoreV1NFSVolumeSourceToJSON(value.nfs),
    nodeAffinity: IoK8sApiCoreV1VolumeNodeAffinityToJSON(value.nodeAffinity),
    persistentVolumeReclaimPolicy: value.persistentVolumeReclaimPolicy,
    photonPersistentDisk: IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceToJSON(
      value.photonPersistentDisk,
    ),
    portworxVolume: IoK8sApiCoreV1PortworxVolumeSourceToJSON(value.portworxVolume),
    quobyte: IoK8sApiCoreV1QuobyteVolumeSourceToJSON(value.quobyte),
    rbd: IoK8sApiCoreV1RBDPersistentVolumeSourceToJSON(value.rbd),
    scaleIO: IoK8sApiCoreV1ScaleIOPersistentVolumeSourceToJSON(value.scaleIO),
    storageClassName: value.storageClassName,
    storageos: IoK8sApiCoreV1StorageOSPersistentVolumeSourceToJSON(value.storageos),
    volumeAttributesClassName: value.volumeAttributesClassName,
    volumeMode: value.volumeMode,
    vsphereVolume: IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceToJSON(value.vsphereVolume),
  };
}
