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
/**
 * 
 * @export
 * @interface V1alpha1VirtualMachinePoolCondition
 */
export interface V1alpha1VirtualMachinePoolCondition {
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    type: string;
}

export function V1alpha1VirtualMachinePoolConditionFromJSON(json: any): V1alpha1VirtualMachinePoolCondition {
    return V1alpha1VirtualMachinePoolConditionFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolConditionFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachinePoolCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1alpha1VirtualMachinePoolConditionToJSON(value?: V1alpha1VirtualMachinePoolCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

