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
  IoK8sApiCoreV1VolumeProjection,
  IoK8sApiCoreV1VolumeProjectionFromJSON,
  IoK8sApiCoreV1VolumeProjectionToJSON,
} from './';

/**
 * Represents a projected volume source
 * @export
 * @interface IoK8sApiCoreV1ProjectedVolumeSource
 */
export interface IoK8sApiCoreV1ProjectedVolumeSource {
  /**
   * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof IoK8sApiCoreV1ProjectedVolumeSource
   */
  defaultMode?: number;
  /**
   * sources is the list of volume projections. Each entry in this list handles one source.
   * @type {Array<IoK8sApiCoreV1VolumeProjection>}
   * @memberof IoK8sApiCoreV1ProjectedVolumeSource
   */
  sources?: Array<IoK8sApiCoreV1VolumeProjection>;
}

export function IoK8sApiCoreV1ProjectedVolumeSourceFromJSON(
  json: any,
): IoK8sApiCoreV1ProjectedVolumeSource {
  return IoK8sApiCoreV1ProjectedVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ProjectedVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1ProjectedVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    defaultMode: !exists(json, 'defaultMode') ? undefined : json['defaultMode'],
    sources: !exists(json, 'sources')
      ? undefined
      : (json['sources'] as Array<any>).map(IoK8sApiCoreV1VolumeProjectionFromJSON),
  };
}

export function IoK8sApiCoreV1ProjectedVolumeSourceToJSON(
  value?: IoK8sApiCoreV1ProjectedVolumeSource | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    defaultMode: value.defaultMode,
    sources:
      value.sources === undefined
        ? undefined
        : (value.sources as Array<any>).map(IoK8sApiCoreV1VolumeProjectionToJSON),
  };
}
