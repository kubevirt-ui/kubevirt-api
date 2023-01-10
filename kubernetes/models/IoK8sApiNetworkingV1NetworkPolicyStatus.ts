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
  IoK8sApimachineryPkgApisMetaV1Condition,
  IoK8sApimachineryPkgApisMetaV1ConditionFromJSON,
  IoK8sApimachineryPkgApisMetaV1ConditionToJSON,
} from './';

/**
 * NetworkPolicyStatus describe the current state of the NetworkPolicy.
 * @export
 * @interface IoK8sApiNetworkingV1NetworkPolicyStatus
 */
export interface IoK8sApiNetworkingV1NetworkPolicyStatus {
  /**
   * Conditions holds an array of metav1.Condition that describe the state of the NetworkPolicy. Current service state
   * @type {Array<IoK8sApimachineryPkgApisMetaV1Condition>}
   * @memberof IoK8sApiNetworkingV1NetworkPolicyStatus
   */
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
}

export function IoK8sApiNetworkingV1NetworkPolicyStatusFromJSON(
  json: any,
): IoK8sApiNetworkingV1NetworkPolicyStatus {
  return IoK8sApiNetworkingV1NetworkPolicyStatusFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1NetworkPolicyStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiNetworkingV1NetworkPolicyStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    conditions: !exists(json, 'conditions')
      ? undefined
      : (json['conditions'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ConditionFromJSON),
  };
}

export function IoK8sApiNetworkingV1NetworkPolicyStatusToJSON(
  value?: IoK8sApiNetworkingV1NetworkPolicyStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    conditions:
      value.conditions === undefined
        ? undefined
        : (value.conditions as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ConditionToJSON),
  };
}