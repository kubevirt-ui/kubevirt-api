/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
/**
 *
 * @export
 * @interface V1alpha1VirtualMachineCloneTemplateFilters
 */
export interface V1alpha1VirtualMachineCloneTemplateFilters {
  /**
   * Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters.
   * @type {Array<string>}
   * @memberof V1alpha1VirtualMachineCloneTemplateFilters
   */
  annotationFilters?: Array<string>;
  /**
   * Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters.
   * @type {Array<string>}
   * @memberof V1alpha1VirtualMachineCloneTemplateFilters
   */
  labelFilters?: Array<string>;
}

export function V1alpha1VirtualMachineCloneTemplateFiltersFromJSON(
  json: any,
): V1alpha1VirtualMachineCloneTemplateFilters {
  return V1alpha1VirtualMachineCloneTemplateFiltersFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineCloneTemplateFiltersFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1VirtualMachineCloneTemplateFilters {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    annotationFilters: !exists(json, 'annotationFilters') ? undefined : json['annotationFilters'],
    labelFilters: !exists(json, 'labelFilters') ? undefined : json['labelFilters'],
  };
}

export function V1alpha1VirtualMachineCloneTemplateFiltersToJSON(
  value?: V1alpha1VirtualMachineCloneTemplateFilters | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    annotationFilters: value.annotationFilters,
    labelFilters: value.labelFilters,
  };
}
