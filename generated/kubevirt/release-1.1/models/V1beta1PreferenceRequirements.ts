/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1beta1CPUPreferenceRequirement,
    V1beta1CPUPreferenceRequirementFromJSON,
    V1beta1CPUPreferenceRequirementFromJSONTyped,
    V1beta1CPUPreferenceRequirementToJSON,
    V1beta1MemoryPreferenceRequirement,
    V1beta1MemoryPreferenceRequirementFromJSON,
    V1beta1MemoryPreferenceRequirementFromJSONTyped,
    V1beta1MemoryPreferenceRequirementToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1beta1PreferenceRequirements
 */
export interface V1beta1PreferenceRequirements {
    /**
     * 
     * @type {V1beta1CPUPreferenceRequirement}
     * @memberof V1beta1PreferenceRequirements
     */
    cpu?: V1beta1CPUPreferenceRequirement;
    /**
     * 
     * @type {V1beta1MemoryPreferenceRequirement}
     * @memberof V1beta1PreferenceRequirements
     */
    memory?: V1beta1MemoryPreferenceRequirement;
}

export function V1beta1PreferenceRequirementsFromJSON(json: any): V1beta1PreferenceRequirements {
    return V1beta1PreferenceRequirementsFromJSONTyped(json, false);
}

export function V1beta1PreferenceRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PreferenceRequirements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cpu': !exists(json, 'cpu') ? undefined : V1beta1CPUPreferenceRequirementFromJSON(json['cpu']),
        'memory': !exists(json, 'memory') ? undefined : V1beta1MemoryPreferenceRequirementFromJSON(json['memory']),
    };
}

export function V1beta1PreferenceRequirementsToJSON(value?: V1beta1PreferenceRequirements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cpu': V1beta1CPUPreferenceRequirementToJSON(value.cpu),
        'memory': V1beta1MemoryPreferenceRequirementToJSON(value.memory),
    };
}

