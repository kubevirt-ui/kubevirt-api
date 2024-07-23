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
    IoK8sApiCoreV1NodeSelectorTerm,
    IoK8sApiCoreV1NodeSelectorTermFromJSON,
    IoK8sApiCoreV1NodeSelectorTermFromJSONTyped,
    IoK8sApiCoreV1NodeSelectorTermToJSON,
} from './';

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 * @export
 * @interface IoK8sApiCoreV1PreferredSchedulingTerm
 */
export interface IoK8sApiCoreV1PreferredSchedulingTerm {
    /**
     * 
     * @type {IoK8sApiCoreV1NodeSelectorTerm}
     * @memberof IoK8sApiCoreV1PreferredSchedulingTerm
     */
    preference: IoK8sApiCoreV1NodeSelectorTerm;
    /**
     * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
     * @type {number}
     * @memberof IoK8sApiCoreV1PreferredSchedulingTerm
     */
    weight: number;
}

export function IoK8sApiCoreV1PreferredSchedulingTermFromJSON(json: any): IoK8sApiCoreV1PreferredSchedulingTerm {
    return IoK8sApiCoreV1PreferredSchedulingTermFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PreferredSchedulingTermFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1PreferredSchedulingTerm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preference': IoK8sApiCoreV1NodeSelectorTermFromJSON(json['preference']),
        'weight': json['weight'],
    };
}

export function IoK8sApiCoreV1PreferredSchedulingTermToJSON(value?: IoK8sApiCoreV1PreferredSchedulingTerm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preference': IoK8sApiCoreV1NodeSelectorTermToJSON(value.preference),
        'weight': value.weight,
    };
}

