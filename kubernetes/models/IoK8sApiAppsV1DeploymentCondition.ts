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
 * DeploymentCondition describes the state of a deployment at a certain point.
 * @export
 * @interface IoK8sApiAppsV1DeploymentCondition
 */
export interface IoK8sApiAppsV1DeploymentCondition {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof IoK8sApiAppsV1DeploymentCondition
   */
  lastTransitionTime?: string;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof IoK8sApiAppsV1DeploymentCondition
   */
  lastUpdateTime?: string;
  /**
   * A human readable message indicating details about the transition.
   * @type {string}
   * @memberof IoK8sApiAppsV1DeploymentCondition
   */
  message?: string;
  /**
   * The reason for the condition's last transition.
   * @type {string}
   * @memberof IoK8sApiAppsV1DeploymentCondition
   */
  reason?: string;
  /**
   * Status of the condition, one of True, False, Unknown.
   * @type {string}
   * @memberof IoK8sApiAppsV1DeploymentCondition
   */
  status: string;
  /**
   * Type of deployment condition.
   * @type {string}
   * @memberof IoK8sApiAppsV1DeploymentCondition
   */
  type: string;
}

export function IoK8sApiAppsV1DeploymentConditionFromJSON(
  json: any,
): IoK8sApiAppsV1DeploymentCondition {
  return IoK8sApiAppsV1DeploymentConditionFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DeploymentConditionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAppsV1DeploymentCondition {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    lastTransitionTime: !exists(json, 'lastTransitionTime')
      ? undefined
      : json['lastTransitionTime'],
    lastUpdateTime: !exists(json, 'lastUpdateTime') ? undefined : json['lastUpdateTime'],
    message: !exists(json, 'message') ? undefined : json['message'],
    reason: !exists(json, 'reason') ? undefined : json['reason'],
    status: json['status'],
    type: json['type'],
  };
}

export function IoK8sApiAppsV1DeploymentConditionToJSON(
  value?: IoK8sApiAppsV1DeploymentCondition | null,
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
    lastUpdateTime: value.lastUpdateTime === undefined ? undefined : value.lastUpdateTime,
    message: value.message,
    reason: value.reason,
    status: value.status,
    type: value.type,
  };
}
