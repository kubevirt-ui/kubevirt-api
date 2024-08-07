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
 * NamedResourcesRequest is used in ResourceRequestModel.
 * @export
 * @interface IoK8sApiResourceV1alpha2NamedResourcesRequest
 */
export interface IoK8sApiResourceV1alpha2NamedResourcesRequest {
  /**
   * Selector is a CEL expression which must evaluate to true if a resource instance is suitable. The language is as defined in https://kubernetes.io/docs/reference/using-api/cel/
   *
   * In addition, for each type NamedResourcesin AttributeValue there is a map that resolves to the corresponding value of the instance under evaluation. For example:
   *
   *    attributes.quantity["a"].isGreaterThan(quantity("0")) &&
   *    attributes.stringslice["b"].isSorted()
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha2NamedResourcesRequest
   */
  selector: string;
}

export function IoK8sApiResourceV1alpha2NamedResourcesRequestFromJSON(
  json: any,
): IoK8sApiResourceV1alpha2NamedResourcesRequest {
  return IoK8sApiResourceV1alpha2NamedResourcesRequestFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2NamedResourcesRequestFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha2NamedResourcesRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    selector: json['selector'],
  };
}

export function IoK8sApiResourceV1alpha2NamedResourcesRequestToJSON(
  value?: IoK8sApiResourceV1alpha2NamedResourcesRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    selector: value.selector,
  };
}
