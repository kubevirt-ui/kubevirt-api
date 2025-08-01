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
 * PodResourceClaimStatus is stored in the PodStatus for each PodResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.
 * @export
 * @interface IoK8sApiCoreV1PodResourceClaimStatus
 */
export interface IoK8sApiCoreV1PodResourceClaimStatus {
  /**
   * Name uniquely identifies this resource claim inside the pod. This must match the name of an entry in pod.spec.resourceClaims, which implies that the string must be a DNS_LABEL.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodResourceClaimStatus
   */
  name: string;
  /**
   * ResourceClaimName is the name of the ResourceClaim that was generated for the Pod in the namespace of the Pod. If this is unset, then generating a ResourceClaim was not necessary. The pod.spec.resourceClaims entry can be ignored in this case.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodResourceClaimStatus
   */
  resourceClaimName?: string;
}

export function IoK8sApiCoreV1PodResourceClaimStatusFromJSON(
  json: any,
): IoK8sApiCoreV1PodResourceClaimStatus {
  return IoK8sApiCoreV1PodResourceClaimStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodResourceClaimStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PodResourceClaimStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    resourceClaimName: !exists(json, 'resourceClaimName') ? undefined : json['resourceClaimName'],
  };
}

export function IoK8sApiCoreV1PodResourceClaimStatusToJSON(
  value?: IoK8sApiCoreV1PodResourceClaimStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    resourceClaimName: value.resourceClaimName,
  };
}
