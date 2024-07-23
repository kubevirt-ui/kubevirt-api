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
/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1GCEPersistentDiskVolumeSource
 */
export interface IoK8sApiCoreV1GCEPersistentDiskVolumeSource {
  /**
   * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {string}
   * @memberof IoK8sApiCoreV1GCEPersistentDiskVolumeSource
   */
  fsType?: string;
  /**
   * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {number}
   * @memberof IoK8sApiCoreV1GCEPersistentDiskVolumeSource
   */
  partition?: number;
  /**
   * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {string}
   * @memberof IoK8sApiCoreV1GCEPersistentDiskVolumeSource
   */
  pdName: string;
  /**
   * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {boolean}
   * @memberof IoK8sApiCoreV1GCEPersistentDiskVolumeSource
   */
  readOnly?: boolean;
}

export function IoK8sApiCoreV1GCEPersistentDiskVolumeSourceFromJSON(
  json: any,
): IoK8sApiCoreV1GCEPersistentDiskVolumeSource {
  return IoK8sApiCoreV1GCEPersistentDiskVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1GCEPersistentDiskVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1GCEPersistentDiskVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    fsType: !exists(json, 'fsType') ? undefined : json['fsType'],
    partition: !exists(json, 'partition') ? undefined : json['partition'],
    pdName: json['pdName'],
    readOnly: !exists(json, 'readOnly') ? undefined : json['readOnly'],
  };
}

export function IoK8sApiCoreV1GCEPersistentDiskVolumeSourceToJSON(
  value?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    fsType: value.fsType,
    partition: value.partition,
    pdName: value.pdName,
    readOnly: value.readOnly,
  };
}
