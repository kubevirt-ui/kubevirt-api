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
  IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations,
  IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperationsFromJSON,
  IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperationsToJSON,
  IoK8sApimachineryPkgApisMetaV1LabelSelector,
  IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
  IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './';

/**
 * MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
 * @export
 * @interface IoK8sApiAdmissionregistrationV1alpha1MatchResources
 */
export interface IoK8sApiAdmissionregistrationV1alpha1MatchResources {
  /**
   * ExcludeResourceRules describes what operations on what resources/subresources the policy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
   * @type {Array<IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations>}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1MatchResources
   */
  excludeResourceRules?: Array<IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations>;
  /**
   * matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
   *
   * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, the admission policy does not consider requests to apps/v1beta1 or extensions/v1beta1 API groups.
   *
   * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, the admission policy **does** consider requests made to apps/v1beta1 or extensions/v1beta1 API groups. The API server translates the request to a matched resource API if necessary.
   *
   * Defaults to "Equivalent"
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1MatchResources
   */
  matchPolicy?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1MatchResources
   */
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1MatchResources
   */
  objectSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  /**
   * ResourceRules describes what operations on what resources/subresources the admission policy matches. The policy cares about an operation if it matches _any_ Rule.
   * @type {Array<IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations>}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1MatchResources
   */
  resourceRules?: Array<IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperations>;
}

export function IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSON(
  json: any,
): IoK8sApiAdmissionregistrationV1alpha1MatchResources {
  return IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAdmissionregistrationV1alpha1MatchResources {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    excludeResourceRules: !exists(json, 'excludeResourceRules')
      ? undefined
      : (json['excludeResourceRules'] as Array<any>).map(
          IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperationsFromJSON,
        ),
    matchPolicy: !exists(json, 'matchPolicy') ? undefined : json['matchPolicy'],
    namespaceSelector: !exists(json, 'namespaceSelector')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['namespaceSelector']),
    objectSelector: !exists(json, 'objectSelector')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['objectSelector']),
    resourceRules: !exists(json, 'resourceRules')
      ? undefined
      : (json['resourceRules'] as Array<any>).map(
          IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperationsFromJSON,
        ),
  };
}

export function IoK8sApiAdmissionregistrationV1alpha1MatchResourcesToJSON(
  value?: IoK8sApiAdmissionregistrationV1alpha1MatchResources | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    excludeResourceRules:
      value.excludeResourceRules === undefined
        ? undefined
        : (value.excludeResourceRules as Array<any>).map(
            IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperationsToJSON,
          ),
    matchPolicy: value.matchPolicy,
    namespaceSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.namespaceSelector),
    objectSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.objectSelector),
    resourceRules:
      value.resourceRules === undefined
        ? undefined
        : (value.resourceRules as Array<any>).map(
            IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperationsToJSON,
          ),
  };
}
