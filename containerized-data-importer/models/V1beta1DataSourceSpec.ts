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

import {
  V1beta1DataSourceSource,
  V1beta1DataSourceSourceFromJSON,
  V1beta1DataSourceSourceToJSON,
} from './';

/**
 * DataSourceSpec defines specification for DataSource
 * @export
 * @interface V1beta1DataSourceSpec
 */
export interface V1beta1DataSourceSpec {
  /**
   *
   * @type {V1beta1DataSourceSource}
   * @memberof V1beta1DataSourceSpec
   */
  source: V1beta1DataSourceSource;
}

export function V1beta1DataSourceSpecFromJSON(json: any): V1beta1DataSourceSpec {
  return V1beta1DataSourceSpecFromJSONTyped(json, false);
}

export function V1beta1DataSourceSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1DataSourceSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    source: V1beta1DataSourceSourceFromJSON(json['source']),
  };
}

export function V1beta1DataSourceSpecToJSON(value?: V1beta1DataSourceSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    source: V1beta1DataSourceSourceToJSON(value.source),
  };
}
