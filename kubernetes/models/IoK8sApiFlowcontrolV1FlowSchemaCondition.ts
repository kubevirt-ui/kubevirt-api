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
 * FlowSchemaCondition describes conditions for a FlowSchema.
 * @export
 * @interface IoK8sApiFlowcontrolV1FlowSchemaCondition
 */
export interface IoK8sApiFlowcontrolV1FlowSchemaCondition {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1FlowSchemaCondition
   */
  lastTransitionTime?: string;
  /**
   * `message` is a human-readable message indicating details about last transition.
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1FlowSchemaCondition
   */
  message?: string;
  /**
   * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1FlowSchemaCondition
   */
  reason?: string;
  /**
   * `status` is the status of the condition. Can be True, False, Unknown. Required.
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1FlowSchemaCondition
   */
  status?: string;
  /**
   * `type` is the type of the condition. Required.
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1FlowSchemaCondition
   */
  type?: string;
}

export function IoK8sApiFlowcontrolV1FlowSchemaConditionFromJSON(
  json: any,
): IoK8sApiFlowcontrolV1FlowSchemaCondition {
  return IoK8sApiFlowcontrolV1FlowSchemaConditionFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1FlowSchemaConditionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiFlowcontrolV1FlowSchemaCondition {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    lastTransitionTime: !exists(json, 'lastTransitionTime')
      ? undefined
      : json['lastTransitionTime'],
    message: !exists(json, 'message') ? undefined : json['message'],
    reason: !exists(json, 'reason') ? undefined : json['reason'],
    status: !exists(json, 'status') ? undefined : json['status'],
    type: !exists(json, 'type') ? undefined : json['type'],
  };
}

export function IoK8sApiFlowcontrolV1FlowSchemaConditionToJSON(
  value?: IoK8sApiFlowcontrolV1FlowSchemaCondition | null,
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
