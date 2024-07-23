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
  IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement,
  IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSON,
  IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementToJSON,
} from './';

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1LabelSelector
 */
export interface IoK8sApimachineryPkgApisMetaV1LabelSelector {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   * @type {Array<IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>}
   * @memberof IoK8sApimachineryPkgApisMetaV1LabelSelector
   */
  matchExpressions?: Array<IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>;
  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApimachineryPkgApisMetaV1LabelSelector
   */
  matchLabels?: { [key: string]: string };
}

export function IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(
  json: any,
): IoK8sApimachineryPkgApisMetaV1LabelSelector {
  return IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApimachineryPkgApisMetaV1LabelSelector {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    matchExpressions: !exists(json, 'matchExpressions')
      ? undefined
      : (json['matchExpressions'] as Array<any>).map(
          IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSON,
        ),
    matchLabels: !exists(json, 'matchLabels') ? undefined : json['matchLabels'],
  };
}

export function IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(
  value?: IoK8sApimachineryPkgApisMetaV1LabelSelector | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    matchExpressions:
      value.matchExpressions === undefined
        ? undefined
        : (value.matchExpressions as Array<any>).map(
            IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementToJSON,
          ),
    matchLabels: value.matchLabels,
  };
}
