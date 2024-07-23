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
    IoK8sApiCoreV1PodAffinityTerm,
    IoK8sApiCoreV1PodAffinityTermFromJSON,
    IoK8sApiCoreV1PodAffinityTermFromJSONTyped,
    IoK8sApiCoreV1PodAffinityTermToJSON,
} from './';

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 * @export
 * @interface IoK8sApiCoreV1WeightedPodAffinityTerm
 */
export interface IoK8sApiCoreV1WeightedPodAffinityTerm {
    /**
     * 
     * @type {IoK8sApiCoreV1PodAffinityTerm}
     * @memberof IoK8sApiCoreV1WeightedPodAffinityTerm
     */
    podAffinityTerm: IoK8sApiCoreV1PodAffinityTerm;
    /**
     * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
     * @type {number}
     * @memberof IoK8sApiCoreV1WeightedPodAffinityTerm
     */
    weight: number;
}

export function IoK8sApiCoreV1WeightedPodAffinityTermFromJSON(json: any): IoK8sApiCoreV1WeightedPodAffinityTerm {
    return IoK8sApiCoreV1WeightedPodAffinityTermFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1WeightedPodAffinityTermFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1WeightedPodAffinityTerm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'podAffinityTerm': IoK8sApiCoreV1PodAffinityTermFromJSON(json['podAffinityTerm']),
        'weight': json['weight'],
    };
}

export function IoK8sApiCoreV1WeightedPodAffinityTermToJSON(value?: IoK8sApiCoreV1WeightedPodAffinityTerm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'podAffinityTerm': IoK8sApiCoreV1PodAffinityTermToJSON(value.podAffinityTerm),
        'weight': value.weight,
    };
}

