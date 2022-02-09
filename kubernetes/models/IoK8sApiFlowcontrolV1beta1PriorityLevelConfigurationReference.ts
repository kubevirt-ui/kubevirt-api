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
 * PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference
 */
export interface IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference {
  /**
   * `name` is the name of the priority level configuration being referenced Required.
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference
   */
  name: string;
}

export function IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReferenceFromJSON(
  json: any,
): IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference {
  return IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReferenceFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReferenceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
  };
}

export function IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReferenceToJSON(
  value?: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
  };
}