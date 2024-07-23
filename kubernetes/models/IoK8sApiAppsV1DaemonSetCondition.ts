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
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 * @export
 * @interface IoK8sApiAppsV1DaemonSetCondition
 */
export interface IoK8sApiAppsV1DaemonSetCondition {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof IoK8sApiAppsV1DaemonSetCondition
   */
  lastTransitionTime?: string;
  /**
   * A human readable message indicating details about the transition.
   * @type {string}
   * @memberof IoK8sApiAppsV1DaemonSetCondition
   */
  message?: string;
  /**
   * The reason for the condition's last transition.
   * @type {string}
   * @memberof IoK8sApiAppsV1DaemonSetCondition
   */
  reason?: string;
  /**
   * Status of the condition, one of True, False, Unknown.
   * @type {string}
   * @memberof IoK8sApiAppsV1DaemonSetCondition
   */
  status: string;
  /**
   * Type of DaemonSet condition.
   * @type {string}
   * @memberof IoK8sApiAppsV1DaemonSetCondition
   */
  type: string;
}

export function IoK8sApiAppsV1DaemonSetConditionFromJSON(
  json: any,
): IoK8sApiAppsV1DaemonSetCondition {
  return IoK8sApiAppsV1DaemonSetConditionFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DaemonSetConditionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAppsV1DaemonSetCondition {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    lastTransitionTime: !exists(json, 'lastTransitionTime')
      ? undefined
      : json['lastTransitionTime'],
    message: !exists(json, 'message') ? undefined : json['message'],
    reason: !exists(json, 'reason') ? undefined : json['reason'],
    status: json['status'],
    type: json['type'],
  };
}

export function IoK8sApiAppsV1DaemonSetConditionToJSON(
  value?: IoK8sApiAppsV1DaemonSetCondition | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    lastTransitionTime:
      value.lastTransitionTime === undefined ? undefined : value.lastTransitionTime,
    message: value.message,
    reason: value.reason,
    status: value.status,
    type: value.type,
  };
}
