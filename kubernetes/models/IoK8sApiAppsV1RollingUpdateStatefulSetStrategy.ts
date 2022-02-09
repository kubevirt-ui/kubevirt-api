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
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 * @export
 * @interface IoK8sApiAppsV1RollingUpdateStatefulSetStrategy
 */
export interface IoK8sApiAppsV1RollingUpdateStatefulSetStrategy {
  /**
   * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
   * @type {number}
   * @memberof IoK8sApiAppsV1RollingUpdateStatefulSetStrategy
   */
  partition?: number;
}

export function IoK8sApiAppsV1RollingUpdateStatefulSetStrategyFromJSON(
  json: any,
): IoK8sApiAppsV1RollingUpdateStatefulSetStrategy {
  return IoK8sApiAppsV1RollingUpdateStatefulSetStrategyFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1RollingUpdateStatefulSetStrategyFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAppsV1RollingUpdateStatefulSetStrategy {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    partition: !exists(json, 'partition') ? undefined : json['partition'],
  };
}

export function IoK8sApiAppsV1RollingUpdateStatefulSetStrategyToJSON(
  value?: IoK8sApiAppsV1RollingUpdateStatefulSetStrategy | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    partition: value.partition,
  };
}