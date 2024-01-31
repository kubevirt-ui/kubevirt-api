/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  V1LabelSelector,
  V1LabelSelectorFromJSON,
  V1LabelSelectorToJSON,
  V1ResourceRequirements,
  V1ResourceRequirementsFromJSON,
  V1ResourceRequirementsToJSON,
  V1TypedLocalObjectReference,
  V1TypedLocalObjectReferenceFromJSON,
  V1TypedLocalObjectReferenceToJSON,
  V1TypedObjectReference,
  V1TypedObjectReferenceFromJSON,
  V1TypedObjectReferenceToJSON,
} from './';

/**
 * StorageSpec defines the Storage type specification
 * @export
 * @interface V1beta1StorageSpec
 */
export interface V1beta1StorageSpec {
  /**
   * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   * @type {Array<string>}
   * @memberof V1beta1StorageSpec
   */
  accessModes?: Array<string>;
  /**
   *
   * @type {V1TypedLocalObjectReference}
   * @memberof V1beta1StorageSpec
   */
  dataSource?: V1TypedLocalObjectReference;
  /**
   *
   * @type {V1TypedObjectReference}
   * @memberof V1beta1StorageSpec
   */
  dataSourceRef?: V1TypedObjectReference;
  /**
   *
   * @type {V1ResourceRequirements}
   * @memberof V1beta1StorageSpec
   */
  resources?: V1ResourceRequirements;
  /**
   *
   * @type {V1LabelSelector}
   * @memberof V1beta1StorageSpec
   */
  selector?: V1LabelSelector;
  /**
   * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
   * @type {string}
   * @memberof V1beta1StorageSpec
   */
  storageClassName?: string;
  /**
   * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
   *
   * Possible enum values:
   *  - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
   *  - `"Filesystem"` means the volume will be or is formatted with a filesystem.
   * @type {string}
   * @memberof V1beta1StorageSpec
   */
  volumeMode?: V1beta1StorageSpecVolumeModeEnum;
  /**
   * VolumeName is the binding reference to the PersistentVolume backing this claim.
   * @type {string}
   * @memberof V1beta1StorageSpec
   */
  volumeName?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum V1beta1StorageSpecVolumeModeEnum {
  Block = 'Block',
  Filesystem = 'Filesystem',
}

export function V1beta1StorageSpecFromJSON(json: any): V1beta1StorageSpec {
  return V1beta1StorageSpecFromJSONTyped(json, false);
}

export function V1beta1StorageSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1StorageSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accessModes: !exists(json, 'accessModes') ? undefined : json['accessModes'],
    dataSource: !exists(json, 'dataSource')
      ? undefined
      : V1TypedLocalObjectReferenceFromJSON(json['dataSource']),
    dataSourceRef: !exists(json, 'dataSourceRef')
      ? undefined
      : V1TypedObjectReferenceFromJSON(json['dataSourceRef']),
    resources: !exists(json, 'resources')
      ? undefined
      : V1ResourceRequirementsFromJSON(json['resources']),
    selector: !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
    storageClassName: !exists(json, 'storageClassName') ? undefined : json['storageClassName'],
    volumeMode: !exists(json, 'volumeMode') ? undefined : json['volumeMode'],
    volumeName: !exists(json, 'volumeName') ? undefined : json['volumeName'],
  };
}

export function V1beta1StorageSpecToJSON(value?: V1beta1StorageSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accessModes: value.accessModes,
    dataSource: V1TypedLocalObjectReferenceToJSON(value.dataSource),
    dataSourceRef: V1TypedObjectReferenceToJSON(value.dataSourceRef),
    resources: V1ResourceRequirementsToJSON(value.resources),
    selector: V1LabelSelectorToJSON(value.selector),
    storageClassName: value.storageClassName,
    volumeMode: value.volumeMode,
    volumeName: value.volumeName,
  };
}
