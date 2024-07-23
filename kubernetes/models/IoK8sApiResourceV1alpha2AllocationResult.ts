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
  IoK8sApiCoreV1NodeSelector,
  IoK8sApiCoreV1NodeSelectorFromJSON,
  IoK8sApiCoreV1NodeSelectorToJSON,
  IoK8sApiResourceV1alpha2ResourceHandle,
  IoK8sApiResourceV1alpha2ResourceHandleFromJSON,
  IoK8sApiResourceV1alpha2ResourceHandleToJSON,
} from './';

/**
 * AllocationResult contains attributes of an allocated resource.
 * @export
 * @interface IoK8sApiResourceV1alpha2AllocationResult
 */
export interface IoK8sApiResourceV1alpha2AllocationResult {
  /**
   *
   * @type {IoK8sApiCoreV1NodeSelector}
   * @memberof IoK8sApiResourceV1alpha2AllocationResult
   */
  availableOnNodes?: IoK8sApiCoreV1NodeSelector;
  /**
   * ResourceHandles contain the state associated with an allocation that should be maintained throughout the lifetime of a claim. Each ResourceHandle contains data that should be passed to a specific kubelet plugin once it lands on a node. This data is returned by the driver after a successful allocation and is opaque to Kubernetes. Driver documentation may explain to users how to interpret this data if needed.
   *
   * Setting this field is optional. It has a maximum size of 32 entries. If null (or empty), it is assumed this allocation will be processed by a single kubelet plugin with no ResourceHandle data attached. The name of the kubelet plugin invoked will match the DriverName set in the ResourceClaimStatus this AllocationResult is embedded in.
   * @type {Array<IoK8sApiResourceV1alpha2ResourceHandle>}
   * @memberof IoK8sApiResourceV1alpha2AllocationResult
   */
  resourceHandles?: Array<IoK8sApiResourceV1alpha2ResourceHandle>;
  /**
   * Shareable determines whether the resource supports more than one consumer at a time.
   * @type {boolean}
   * @memberof IoK8sApiResourceV1alpha2AllocationResult
   */
  shareable?: boolean;
}

export function IoK8sApiResourceV1alpha2AllocationResultFromJSON(
  json: any,
): IoK8sApiResourceV1alpha2AllocationResult {
  return IoK8sApiResourceV1alpha2AllocationResultFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2AllocationResultFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha2AllocationResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    availableOnNodes: !exists(json, 'availableOnNodes')
      ? undefined
      : IoK8sApiCoreV1NodeSelectorFromJSON(json['availableOnNodes']),
    resourceHandles: !exists(json, 'resourceHandles')
      ? undefined
      : (json['resourceHandles'] as Array<any>).map(IoK8sApiResourceV1alpha2ResourceHandleFromJSON),
    shareable: !exists(json, 'shareable') ? undefined : json['shareable'],
  };
}

export function IoK8sApiResourceV1alpha2AllocationResultToJSON(
  value?: IoK8sApiResourceV1alpha2AllocationResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    availableOnNodes: IoK8sApiCoreV1NodeSelectorToJSON(value.availableOnNodes),
    resourceHandles:
      value.resourceHandles === undefined
        ? undefined
        : (value.resourceHandles as Array<any>).map(IoK8sApiResourceV1alpha2ResourceHandleToJSON),
    shareable: value.shareable,
  };
}
