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
  IoK8sApiResourceV1alpha1ResourceClaim,
  IoK8sApiResourceV1alpha1ResourceClaimFromJSON,
  IoK8sApiResourceV1alpha1ResourceClaimToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * ResourceClaimList is a collection of claims.
 * @export
 * @interface IoK8sApiResourceV1alpha1ResourceClaimList
 */
export interface IoK8sApiResourceV1alpha1ResourceClaimList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaimList
   */
  apiVersion?: string;
  /**
   * Items is the list of resource claims.
   * @type {Array<IoK8sApiResourceV1alpha1ResourceClaim>}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaimList
   */
  items: Array<IoK8sApiResourceV1alpha1ResourceClaim>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaimList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaimList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiResourceV1alpha1ResourceClaimListFromJSON(
  json: any,
): IoK8sApiResourceV1alpha1ResourceClaimList {
  return IoK8sApiResourceV1alpha1ResourceClaimListFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha1ResourceClaimListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha1ResourceClaimList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(IoK8sApiResourceV1alpha1ResourceClaimFromJSON),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiResourceV1alpha1ResourceClaimListToJSON(
  value?: IoK8sApiResourceV1alpha1ResourceClaimList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(IoK8sApiResourceV1alpha1ResourceClaimToJSON),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}