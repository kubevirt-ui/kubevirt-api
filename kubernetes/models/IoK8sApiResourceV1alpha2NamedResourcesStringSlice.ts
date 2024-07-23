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
 * NamedResourcesStringSlice contains a slice of strings.
 * @export
 * @interface IoK8sApiResourceV1alpha2NamedResourcesStringSlice
 */
export interface IoK8sApiResourceV1alpha2NamedResourcesStringSlice {
  /**
   * Strings is the slice of strings.
   * @type {Array<string>}
   * @memberof IoK8sApiResourceV1alpha2NamedResourcesStringSlice
   */
  strings: Array<string>;
}

export function IoK8sApiResourceV1alpha2NamedResourcesStringSliceFromJSON(
  json: any,
): IoK8sApiResourceV1alpha2NamedResourcesStringSlice {
  return IoK8sApiResourceV1alpha2NamedResourcesStringSliceFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2NamedResourcesStringSliceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha2NamedResourcesStringSlice {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    strings: json['strings'],
  };
}

export function IoK8sApiResourceV1alpha2NamedResourcesStringSliceToJSON(
  value?: IoK8sApiResourceV1alpha2NamedResourcesStringSlice | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    strings: value.strings,
  };
}
