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

import { exists, mapValues } from '../runtime';
import {
    IoK8sApiCoreV1NodeSelector,
    IoK8sApiCoreV1NodeSelectorFromJSON,
    IoK8sApiCoreV1NodeSelectorFromJSONTyped,
    IoK8sApiCoreV1NodeSelectorToJSON,
} from './';

/**
 * AllocationResult contains attributed of an allocated resource.
 * @export
 * @interface IoK8sApiResourceV1alpha1AllocationResult
 */
export interface IoK8sApiResourceV1alpha1AllocationResult {
    /**
     * 
     * @type {IoK8sApiCoreV1NodeSelector}
     * @memberof IoK8sApiResourceV1alpha1AllocationResult
     */
    availableOnNodes?: IoK8sApiCoreV1NodeSelector;
    /**
     * ResourceHandle contains arbitrary data returned by the driver after a successful allocation. This is opaque for Kubernetes. Driver documentation may explain to users how to interpret this data if needed.
     * 
     * The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha1AllocationResult
     */
    resourceHandle?: string;
    /**
     * Shareable determines whether the resource supports more than one consumer at a time.
     * @type {boolean}
     * @memberof IoK8sApiResourceV1alpha1AllocationResult
     */
    shareable?: boolean;
}

export function IoK8sApiResourceV1alpha1AllocationResultFromJSON(json: any): IoK8sApiResourceV1alpha1AllocationResult {
    return IoK8sApiResourceV1alpha1AllocationResultFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha1AllocationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha1AllocationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableOnNodes': !exists(json, 'availableOnNodes') ? undefined : IoK8sApiCoreV1NodeSelectorFromJSON(json['availableOnNodes']),
        'resourceHandle': !exists(json, 'resourceHandle') ? undefined : json['resourceHandle'],
        'shareable': !exists(json, 'shareable') ? undefined : json['shareable'],
    };
}

export function IoK8sApiResourceV1alpha1AllocationResultToJSON(value?: IoK8sApiResourceV1alpha1AllocationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableOnNodes': IoK8sApiCoreV1NodeSelectorToJSON(value.availableOnNodes),
        'resourceHandle': value.resourceHandle,
        'shareable': value.shareable,
    };
}
