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
/**
 *
 * @export
 * @interface IoK8sApiCoreV1TypedObjectReference
 */
export interface IoK8sApiCoreV1TypedObjectReference {
  /**
   * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
   * @type {string}
   * @memberof IoK8sApiCoreV1TypedObjectReference
   */
  apiGroup?: string;
  /**
   * Kind is the type of resource being referenced
   * @type {string}
   * @memberof IoK8sApiCoreV1TypedObjectReference
   */
  kind: string;
  /**
   * Name is the name of resource being referenced
   * @type {string}
   * @memberof IoK8sApiCoreV1TypedObjectReference
   */
  name: string;
  /**
   * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
   * @type {string}
   * @memberof IoK8sApiCoreV1TypedObjectReference
   */
  namespace?: string;
}

export function IoK8sApiCoreV1TypedObjectReferenceFromJSON(
  json: any,
): IoK8sApiCoreV1TypedObjectReference {
  return IoK8sApiCoreV1TypedObjectReferenceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1TypedObjectReferenceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1TypedObjectReference {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiGroup: !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
    kind: json['kind'],
    name: json['name'],
    namespace: !exists(json, 'namespace') ? undefined : json['namespace'],
  };
}

export function IoK8sApiCoreV1TypedObjectReferenceToJSON(
  value?: IoK8sApiCoreV1TypedObjectReference | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiGroup: value.apiGroup,
    kind: value.kind,
    name: value.name,
    namespace: value.namespace,
  };
}
