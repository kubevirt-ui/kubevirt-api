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
 * PodResourceClaim references exactly one ResourceClaim, either directly or by naming a ResourceClaimTemplate which is then turned into a ResourceClaim for the pod.
 *
 * It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
 * @export
 * @interface IoK8sApiCoreV1PodResourceClaim
 */
export interface IoK8sApiCoreV1PodResourceClaim {
  /**
   * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodResourceClaim
   */
  name: string;
  /**
   * ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.
   *
   * Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodResourceClaim
   */
  resourceClaimName?: string;
  /**
   * ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.
   *
   * The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.
   *
   * This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.
   *
   * Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
   * @type {string}
   * @memberof IoK8sApiCoreV1PodResourceClaim
   */
  resourceClaimTemplateName?: string;
}

export function IoK8sApiCoreV1PodResourceClaimFromJSON(json: any): IoK8sApiCoreV1PodResourceClaim {
  return IoK8sApiCoreV1PodResourceClaimFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodResourceClaimFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PodResourceClaim {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    resourceClaimName: !exists(json, 'resourceClaimName') ? undefined : json['resourceClaimName'],
    resourceClaimTemplateName: !exists(json, 'resourceClaimTemplateName')
      ? undefined
      : json['resourceClaimTemplateName'],
  };
}

export function IoK8sApiCoreV1PodResourceClaimToJSON(
  value?: IoK8sApiCoreV1PodResourceClaim | null,
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
    resourceClaimTemplateName: value.resourceClaimTemplateName,
  };
}
