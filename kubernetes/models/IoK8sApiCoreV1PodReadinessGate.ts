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

/**
 * PodReadinessGate contains the reference to a pod condition
 * @export
 * @interface IoK8sApiCoreV1PodReadinessGate
 */
export interface IoK8sApiCoreV1PodReadinessGate {
  /**
   * ConditionType refers to a condition in the pod's condition list with matching type.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodReadinessGate
   */
  conditionType: string;
}

export function IoK8sApiCoreV1PodReadinessGateFromJSON(json: any): IoK8sApiCoreV1PodReadinessGate {
  return IoK8sApiCoreV1PodReadinessGateFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodReadinessGateFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PodReadinessGate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    conditionType: json['conditionType'],
  };
}

export function IoK8sApiCoreV1PodReadinessGateToJSON(
  value?: IoK8sApiCoreV1PodReadinessGate | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    conditionType: value.conditionType,
  };
}
