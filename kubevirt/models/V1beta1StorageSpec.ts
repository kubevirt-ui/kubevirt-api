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
  K8sIoApiCoreV1ResourceRequirements,
  K8sIoApiCoreV1ResourceRequirementsFromJSON,
  K8sIoApiCoreV1ResourceRequirementsToJSON,
  K8sIoApiCoreV1TypedLocalObjectReference,
  K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON,
  K8sIoApiCoreV1TypedLocalObjectReferenceToJSON,
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
  accessModes?: Array<string>;
  /**
   *
   * @type {K8sIoApiCoreV1TypedLocalObjectReference}
   * @memberof V1beta1StorageSpec
   */
  dataSource?: K8sIoApiCoreV1TypedLocalObjectReference;
  /**
   *
   * @type {K8sIoApiCoreV1ResourceRequirements}
   * @memberof V1beta1StorageSpec
   */
  resources?: K8sIoApiCoreV1ResourceRequirements;
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
   * @type {string}
   * @memberof V1beta1StorageSpec
   */
  volumeMode?: string;
  /**
   * VolumeName is the binding reference to the PersistentVolume backing this claim.
   * @type {string}
   * @memberof V1beta1StorageSpec
   */
  volumeName?: string;
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
    resources: !exists(json, 'resources')
      ? undefined
      : K8sIoApiCoreV1ResourceRequirementsFromJSON(json['resources']),
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
    resources: K8sIoApiCoreV1ResourceRequirementsToJSON(value.resources),
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
    storageClassName: value.storageClassName,
    volumeMode: value.volumeMode,
    volumeName: value.volumeName,
  };
}
