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
/**
 * VolumeRestoreOverride specifies how a volume should be restored from a VirtualMachineSnapshot
 * @export
 * @interface V1beta1VolumeRestoreOverride
 */
export interface V1beta1VolumeRestoreOverride {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof V1beta1VolumeRestoreOverride
   */
  annotations?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof V1beta1VolumeRestoreOverride
   */
  labels?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof V1beta1VolumeRestoreOverride
   */
  restoreName?: string;
  /**
   *
   * @type {string}
   * @memberof V1beta1VolumeRestoreOverride
   */
  volumeName?: string;
}

export function V1beta1VolumeRestoreOverrideFromJSON(json: any): V1beta1VolumeRestoreOverride {
  return V1beta1VolumeRestoreOverrideFromJSONTyped(json, false);
}

export function V1beta1VolumeRestoreOverrideFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1VolumeRestoreOverride {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    annotations: !exists(json, 'annotations') ? undefined : json['annotations'],
    labels: !exists(json, 'labels') ? undefined : json['labels'],
    restoreName: !exists(json, 'restoreName') ? undefined : json['restoreName'],
    volumeName: !exists(json, 'volumeName') ? undefined : json['volumeName'],
  };
}

export function V1beta1VolumeRestoreOverrideToJSON(
  value?: V1beta1VolumeRestoreOverride | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    annotations: value.annotations,
    labels: value.labels,
    restoreName: value.restoreName,
    volumeName: value.volumeName,
  };
}
