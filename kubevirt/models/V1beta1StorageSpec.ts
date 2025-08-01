/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
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
  K8sIoApiCoreV1TypedLocalObjectReference,
  K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON,
  K8sIoApiCoreV1TypedLocalObjectReferenceToJSON,
  K8sIoApiCoreV1TypedObjectReference,
  K8sIoApiCoreV1TypedObjectReferenceFromJSON,
  K8sIoApiCoreV1TypedObjectReferenceToJSON,
  K8sIoApiCoreV1VolumeResourceRequirements,
  K8sIoApiCoreV1VolumeResourceRequirementsFromJSON,
  K8sIoApiCoreV1VolumeResourceRequirementsToJSON,
  K8sIoApimachineryPkgApisMetaV1LabelSelector,
  K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
  K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
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
  accessModes?: Array<V1beta1StorageSpecAccessModesEnum>;
  /**
   *
   * @type {K8sIoApiCoreV1TypedLocalObjectReference}
   * @memberof V1beta1StorageSpec
   */
  dataSource?: K8sIoApiCoreV1TypedLocalObjectReference;
  /**
   *
   * @type {K8sIoApiCoreV1TypedObjectReference}
   * @memberof V1beta1StorageSpec
   */
  dataSourceRef?: K8sIoApiCoreV1TypedObjectReference;
  /**
   *
   * @type {K8sIoApiCoreV1VolumeResourceRequirements}
   * @memberof V1beta1StorageSpec
   */
  resources?: K8sIoApiCoreV1VolumeResourceRequirements;
  /**
   *
   * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
   * @memberof V1beta1StorageSpec
   */
  selector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
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
   *  - `"FromStorageProfile"` means the volume mode will be auto selected by CDI according to a matching StorageProfile
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
export enum V1beta1StorageSpecAccessModesEnum {
  ReadOnlyMany = 'ReadOnlyMany',
  ReadWriteMany = 'ReadWriteMany',
  ReadWriteOnce = 'ReadWriteOnce',
  ReadWriteOncePod = 'ReadWriteOncePod',
}
/**
 * @export
 * @enum {string}
 */
export enum V1beta1StorageSpecVolumeModeEnum {
  Block = 'Block',
  Filesystem = 'Filesystem',
  FromStorageProfile = 'FromStorageProfile',
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
      : K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json['dataSource']),
    dataSourceRef: !exists(json, 'dataSourceRef')
      ? undefined
      : K8sIoApiCoreV1TypedObjectReferenceFromJSON(json['dataSourceRef']),
    resources: !exists(json, 'resources')
      ? undefined
      : K8sIoApiCoreV1VolumeResourceRequirementsFromJSON(json['resources']),
    selector: !exists(json, 'selector')
      ? undefined
      : K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
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
    dataSource: K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(value.dataSource),
    dataSourceRef: K8sIoApiCoreV1TypedObjectReferenceToJSON(value.dataSourceRef),
    resources: K8sIoApiCoreV1VolumeResourceRequirementsToJSON(value.resources),
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
    storageClassName: value.storageClassName,
    volumeMode: value.volumeMode,
    volumeName: value.volumeName,
  };
}
