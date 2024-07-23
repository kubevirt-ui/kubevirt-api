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
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 * @export
 * @interface IoK8sApiCoreV1EventSeries
 */
export interface IoK8sApiCoreV1EventSeries {
  /**
   * Number of occurrences in this series up to the last heartbeat time
   * @type {number}
   * @memberof IoK8sApiCoreV1EventSeries
   */
  count?: number;
  /**
   * MicroTime is version of Time with microsecond level precision.
   * @type {string}
   * @memberof IoK8sApiCoreV1EventSeries
   */
  lastObservedTime?: string;
}

export function IoK8sApiCoreV1EventSeriesFromJSON(json: any): IoK8sApiCoreV1EventSeries {
  return IoK8sApiCoreV1EventSeriesFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EventSeriesFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1EventSeries {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    count: !exists(json, 'count') ? undefined : json['count'],
    lastObservedTime: !exists(json, 'lastObservedTime') ? undefined : json['lastObservedTime'],
  };
}

export function IoK8sApiCoreV1EventSeriesToJSON(value?: IoK8sApiCoreV1EventSeries | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    count: value.count,
    lastObservedTime: value.lastObservedTime === undefined ? undefined : value.lastObservedTime,
  };
}
