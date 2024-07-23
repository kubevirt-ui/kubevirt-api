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
  IoK8sApiCoreV1SecretReference,
  IoK8sApiCoreV1SecretReferenceFromJSON,
  IoK8sApiCoreV1SecretReferenceToJSON,
} from './';

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 * @export
 * @interface IoK8sApiCoreV1CSIPersistentVolumeSource
 */
export interface IoK8sApiCoreV1CSIPersistentVolumeSource {
  /**
   *
   * @type {IoK8sApiCoreV1SecretReference}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  controllerExpandSecretRef?: IoK8sApiCoreV1SecretReference;
  /**
   *
   * @type {IoK8sApiCoreV1SecretReference}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  controllerPublishSecretRef?: IoK8sApiCoreV1SecretReference;
  /**
   * driver is the name of the driver to use for this volume. Required.
   * @type {string}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  driver: string;
  /**
   * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
   * @type {string}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  fsType?: string;
  /**
   *
   * @type {IoK8sApiCoreV1SecretReference}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  nodeExpandSecretRef?: IoK8sApiCoreV1SecretReference;
  /**
   *
   * @type {IoK8sApiCoreV1SecretReference}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  nodePublishSecretRef?: IoK8sApiCoreV1SecretReference;
  /**
   *
   * @type {IoK8sApiCoreV1SecretReference}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  nodeStageSecretRef?: IoK8sApiCoreV1SecretReference;
  /**
   * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
   * @type {boolean}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  readOnly?: boolean;
  /**
   * volumeAttributes of the volume to publish.
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  volumeAttributes?: { [key: string]: string };
  /**
   * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
   * @type {string}
   * @memberof IoK8sApiCoreV1CSIPersistentVolumeSource
   */
  volumeHandle: string;
}

export function IoK8sApiCoreV1CSIPersistentVolumeSourceFromJSON(
  json: any,
): IoK8sApiCoreV1CSIPersistentVolumeSource {
  return IoK8sApiCoreV1CSIPersistentVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1CSIPersistentVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1CSIPersistentVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    controllerExpandSecretRef: !exists(json, 'controllerExpandSecretRef')
      ? undefined
      : IoK8sApiCoreV1SecretReferenceFromJSON(json['controllerExpandSecretRef']),
    controllerPublishSecretRef: !exists(json, 'controllerPublishSecretRef')
      ? undefined
      : IoK8sApiCoreV1SecretReferenceFromJSON(json['controllerPublishSecretRef']),
    driver: json['driver'],
    fsType: !exists(json, 'fsType') ? undefined : json['fsType'],
    nodeExpandSecretRef: !exists(json, 'nodeExpandSecretRef')
      ? undefined
      : IoK8sApiCoreV1SecretReferenceFromJSON(json['nodeExpandSecretRef']),
    nodePublishSecretRef: !exists(json, 'nodePublishSecretRef')
      ? undefined
      : IoK8sApiCoreV1SecretReferenceFromJSON(json['nodePublishSecretRef']),
    nodeStageSecretRef: !exists(json, 'nodeStageSecretRef')
      ? undefined
      : IoK8sApiCoreV1SecretReferenceFromJSON(json['nodeStageSecretRef']),
    readOnly: !exists(json, 'readOnly') ? undefined : json['readOnly'],
    volumeAttributes: !exists(json, 'volumeAttributes') ? undefined : json['volumeAttributes'],
    volumeHandle: json['volumeHandle'],
  };
}

export function IoK8sApiCoreV1CSIPersistentVolumeSourceToJSON(
  value?: IoK8sApiCoreV1CSIPersistentVolumeSource | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    controllerExpandSecretRef: IoK8sApiCoreV1SecretReferenceToJSON(value.controllerExpandSecretRef),
    controllerPublishSecretRef: IoK8sApiCoreV1SecretReferenceToJSON(
      value.controllerPublishSecretRef,
    ),
    driver: value.driver,
    fsType: value.fsType,
    nodeExpandSecretRef: IoK8sApiCoreV1SecretReferenceToJSON(value.nodeExpandSecretRef),
    nodePublishSecretRef: IoK8sApiCoreV1SecretReferenceToJSON(value.nodePublishSecretRef),
    nodeStageSecretRef: IoK8sApiCoreV1SecretReferenceToJSON(value.nodeStageSecretRef),
    readOnly: value.readOnly,
    volumeAttributes: value.volumeAttributes,
    volumeHandle: value.volumeHandle,
  };
}
