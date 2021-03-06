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
/**
 * IDRange provides a min/max of an allowed range of IDs.
 * @export
 * @interface IoK8sApiPolicyV1beta1IDRange
 */
export interface IoK8sApiPolicyV1beta1IDRange {
    /**
     * max is the end of the range, inclusive.
     * @type {number}
     * @memberof IoK8sApiPolicyV1beta1IDRange
     */
    max: number;
    /**
     * min is the start of the range, inclusive.
     * @type {number}
     * @memberof IoK8sApiPolicyV1beta1IDRange
     */
    min: number;
}

export function IoK8sApiPolicyV1beta1IDRangeFromJSON(json: any): IoK8sApiPolicyV1beta1IDRange {
    return IoK8sApiPolicyV1beta1IDRangeFromJSONTyped(json, false);
}

export function IoK8sApiPolicyV1beta1IDRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiPolicyV1beta1IDRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max': json['max'],
        'min': json['min'],
    };
}

export function IoK8sApiPolicyV1beta1IDRangeToJSON(value?: IoK8sApiPolicyV1beta1IDRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max': value.max,
        'min': value.min,
    };
}

