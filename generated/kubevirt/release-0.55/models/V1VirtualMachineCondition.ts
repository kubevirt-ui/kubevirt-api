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
 * VirtualMachineCondition represents the state of VirtualMachine
 * @export
 * @interface V1VirtualMachineCondition
 */
export interface V1VirtualMachineCondition {
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    type: string;
}

export function V1VirtualMachineConditionFromJSON(json: any): V1VirtualMachineCondition {
    return V1VirtualMachineConditionFromJSONTyped(json, false);
}

export function V1VirtualMachineConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineCondition {
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

export function V1VirtualMachineConditionToJSON(value?: V1VirtualMachineCondition | null): any {
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

