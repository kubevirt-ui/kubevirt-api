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
  V1CustomBlockSize,
  V1CustomBlockSizeFromJSON,
  V1CustomBlockSizeToJSON,
  V1FeatureState,
  V1FeatureStateFromJSON,
  V1FeatureStateToJSON,
} from './';

/**
 * BlockSize provides the option to change the block size presented to the VM for a disk. Only one of its members may be specified.
 * @export
 * @interface V1BlockSize
 */
export interface V1BlockSize {
  /**
   *
   * @type {V1CustomBlockSize}
   * @memberof V1BlockSize
   */
  custom?: V1CustomBlockSize;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1BlockSize
   */
  matchVolume?: V1FeatureState;
}

export function V1BlockSizeFromJSON(json: any): V1BlockSize {
  return V1BlockSizeFromJSONTyped(json, false);
}

export function V1BlockSizeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1BlockSize {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    custom: !exists(json, 'custom') ? undefined : V1CustomBlockSizeFromJSON(json['custom']),
    matchVolume: !exists(json, 'matchVolume')
      ? undefined
      : V1FeatureStateFromJSON(json['matchVolume']),
  };
}

export function V1BlockSizeToJSON(value?: V1BlockSize | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    custom: V1CustomBlockSizeToJSON(value.custom),
    matchVolume: V1FeatureStateToJSON(value.matchVolume),
  };
}
