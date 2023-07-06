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
    IoK8sApiNetworkingV1alpha1ParentReference,
    IoK8sApiNetworkingV1alpha1ParentReferenceFromJSON,
    IoK8sApiNetworkingV1alpha1ParentReferenceFromJSONTyped,
    IoK8sApiNetworkingV1alpha1ParentReferenceToJSON,
} from './';

/**
 * IPAddressSpec describe the attributes in an IP Address.
 * @export
 * @interface IoK8sApiNetworkingV1alpha1IPAddressSpec
 */
export interface IoK8sApiNetworkingV1alpha1IPAddressSpec {
    /**
     * 
     * @type {IoK8sApiNetworkingV1alpha1ParentReference}
     * @memberof IoK8sApiNetworkingV1alpha1IPAddressSpec
     */
    parentRef?: IoK8sApiNetworkingV1alpha1ParentReference;
}

export function IoK8sApiNetworkingV1alpha1IPAddressSpecFromJSON(json: any): IoK8sApiNetworkingV1alpha1IPAddressSpec {
    return IoK8sApiNetworkingV1alpha1IPAddressSpecFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1alpha1IPAddressSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1alpha1IPAddressSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parentRef': !exists(json, 'parentRef') ? undefined : IoK8sApiNetworkingV1alpha1ParentReferenceFromJSON(json['parentRef']),
    };
}

export function IoK8sApiNetworkingV1alpha1IPAddressSpecToJSON(value?: IoK8sApiNetworkingV1alpha1IPAddressSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parentRef': IoK8sApiNetworkingV1alpha1ParentReferenceToJSON(value.parentRef),
    };
}
