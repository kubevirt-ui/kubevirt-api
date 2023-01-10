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
  IoK8sApiResourceV1alpha1ResourceClaimSpec,
  IoK8sApiResourceV1alpha1ResourceClaimSpecFromJSON,
  IoK8sApiResourceV1alpha1ResourceClaimSpecToJSON,
  IoK8sApiResourceV1alpha1ResourceClaimStatus,
  IoK8sApiResourceV1alpha1ResourceClaimStatusFromJSON,
  IoK8sApiResourceV1alpha1ResourceClaimStatusToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ResourceClaim describes which resources are needed by a resource consumer. Its status tracks whether the resource has been allocated and what the resulting attributes are.
 *
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 * @export
 * @interface IoK8sApiResourceV1alpha1ResourceClaim
 */
export interface IoK8sApiResourceV1alpha1ResourceClaim {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaim
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaim
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaim
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiResourceV1alpha1ResourceClaimSpec}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaim
   */
  spec: IoK8sApiResourceV1alpha1ResourceClaimSpec;
  /**
   *
   * @type {IoK8sApiResourceV1alpha1ResourceClaimStatus}
   * @memberof IoK8sApiResourceV1alpha1ResourceClaim
   */
  status?: IoK8sApiResourceV1alpha1ResourceClaimStatus;
}

export function IoK8sApiResourceV1alpha1ResourceClaimFromJSON(
  json: any,
): IoK8sApiResourceV1alpha1ResourceClaim {
  return IoK8sApiResourceV1alpha1ResourceClaimFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha1ResourceClaimFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha1ResourceClaim {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: IoK8sApiResourceV1alpha1ResourceClaimSpecFromJSON(json['spec']),
    status: !exists(json, 'status')
      ? undefined
      : IoK8sApiResourceV1alpha1ResourceClaimStatusFromJSON(json['status']),
  };
}

export function IoK8sApiResourceV1alpha1ResourceClaimToJSON(
  value?: IoK8sApiResourceV1alpha1ResourceClaim | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: IoK8sApiResourceV1alpha1ResourceClaimSpecToJSON(value.spec),
    status: IoK8sApiResourceV1alpha1ResourceClaimStatusToJSON(value.status),
  };
}