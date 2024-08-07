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
  IoK8sApiResourceV1alpha2NamedResourcesAttribute,
  IoK8sApiResourceV1alpha2NamedResourcesAttributeFromJSON,
  IoK8sApiResourceV1alpha2NamedResourcesAttributeToJSON,
} from './';

/**
 * NamedResourcesInstance represents one individual hardware instance that can be selected based on its attributes.
 * @export
 * @interface IoK8sApiResourceV1alpha2NamedResourcesInstance
 */
export interface IoK8sApiResourceV1alpha2NamedResourcesInstance {
  /**
   * Attributes defines the attributes of this resource instance. The name of each attribute must be unique.
   * @type {Array<IoK8sApiResourceV1alpha2NamedResourcesAttribute>}
   * @memberof IoK8sApiResourceV1alpha2NamedResourcesInstance
   */
  attributes?: Array<IoK8sApiResourceV1alpha2NamedResourcesAttribute>;
  /**
   * Name is unique identifier among all resource instances managed by the driver on the node. It must be a DNS subdomain.
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha2NamedResourcesInstance
   */
  name: string;
}

export function IoK8sApiResourceV1alpha2NamedResourcesInstanceFromJSON(
  json: any,
): IoK8sApiResourceV1alpha2NamedResourcesInstance {
  return IoK8sApiResourceV1alpha2NamedResourcesInstanceFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2NamedResourcesInstanceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha2NamedResourcesInstance {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attributes: !exists(json, 'attributes')
      ? undefined
      : (json['attributes'] as Array<any>).map(
          IoK8sApiResourceV1alpha2NamedResourcesAttributeFromJSON,
        ),
    name: json['name'],
  };
}

export function IoK8sApiResourceV1alpha2NamedResourcesInstanceToJSON(
  value?: IoK8sApiResourceV1alpha2NamedResourcesInstance | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attributes:
      value.attributes === undefined
        ? undefined
        : (value.attributes as Array<any>).map(
            IoK8sApiResourceV1alpha2NamedResourcesAttributeToJSON,
          ),
    name: value.name,
  };
}
