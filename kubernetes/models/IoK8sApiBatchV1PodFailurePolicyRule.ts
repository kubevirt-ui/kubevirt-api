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
  IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement,
  IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementFromJSON,
  IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementToJSON,
  IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern,
  IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternFromJSON,
  IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternToJSON,
} from './';

/**
 * PodFailurePolicyRule describes how a pod failure is handled when the requirements are met. One of onExitCodes and onPodConditions, but not both, can be used in each rule.
 * @export
 * @interface IoK8sApiBatchV1PodFailurePolicyRule
 */
export interface IoK8sApiBatchV1PodFailurePolicyRule {
  /**
   * Specifies the action taken on a pod failure when the requirements are satisfied. Possible values are:
   *
   * - FailJob: indicates that the pod's job is marked as Failed and all
   *   running pods are terminated.
   * - Ignore: indicates that the counter towards the .backoffLimit is not
   *   incremented and a replacement pod is created.
   * - Count: indicates that the pod is handled in the default way - the
   *   counter towards the .backoffLimit is incremented.
   * Additional values are considered to be added in the future. Clients should react to an unknown action by skipping the rule.
   * @type {string}
   * @memberof IoK8sApiBatchV1PodFailurePolicyRule
   */
  action: string;
  /**
   *
   * @type {IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement}
   * @memberof IoK8sApiBatchV1PodFailurePolicyRule
   */
  onExitCodes?: IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement;
  /**
   * Represents the requirement on the pod conditions. The requirement is represented as a list of pod condition patterns. The requirement is satisfied if at least one pattern matches an actual pod condition. At most 20 elements are allowed.
   * @type {Array<IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern>}
   * @memberof IoK8sApiBatchV1PodFailurePolicyRule
   */
  onPodConditions?: Array<IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern>;
}

export function IoK8sApiBatchV1PodFailurePolicyRuleFromJSON(
  json: any,
): IoK8sApiBatchV1PodFailurePolicyRule {
  return IoK8sApiBatchV1PodFailurePolicyRuleFromJSONTyped(json, false);
}

export function IoK8sApiBatchV1PodFailurePolicyRuleFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiBatchV1PodFailurePolicyRule {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    action: json['action'],
    onExitCodes: !exists(json, 'onExitCodes')
      ? undefined
      : IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementFromJSON(json['onExitCodes']),
    onPodConditions: !exists(json, 'onPodConditions')
      ? undefined
      : (json['onPodConditions'] as Array<any>).map(
          IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternFromJSON,
        ),
  };
}

export function IoK8sApiBatchV1PodFailurePolicyRuleToJSON(
  value?: IoK8sApiBatchV1PodFailurePolicyRule | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    action: value.action,
    onExitCodes: IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementToJSON(value.onExitCodes),
    onPodConditions:
      value.onPodConditions === undefined
        ? undefined
        : (value.onPodConditions as Array<any>).map(
            IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternToJSON,
          ),
  };
}
