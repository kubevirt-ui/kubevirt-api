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
    V1VirtualMachineInstanceReplicaSetCondition,
    V1VirtualMachineInstanceReplicaSetConditionFromJSON,
    V1VirtualMachineInstanceReplicaSetConditionFromJSONTyped,
    V1VirtualMachineInstanceReplicaSetConditionToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1VirtualMachineInstanceReplicaSetStatus
 */
export interface V1VirtualMachineInstanceReplicaSetStatus {
    /**
     * 
     * @type {Array<V1VirtualMachineInstanceReplicaSetCondition>}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    conditions?: Array<V1VirtualMachineInstanceReplicaSetCondition>;
    /**
     * Canonical form of the label selector for HPA which consumes it through the scale subresource.
     * @type {string}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    labelSelector?: string;
    /**
     * The number of ready replicas for this replica set.
     * @type {number}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    readyReplicas?: number;
    /**
     * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
     * @type {number}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    replicas?: number;
}

export function V1VirtualMachineInstanceReplicaSetStatusFromJSON(json: any): V1VirtualMachineInstanceReplicaSetStatus {
    return V1VirtualMachineInstanceReplicaSetStatusFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceReplicaSetStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceReplicaSetStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1VirtualMachineInstanceReplicaSetConditionFromJSON)),
        'labelSelector': !exists(json, 'labelSelector') ? undefined : json['labelSelector'],
        'readyReplicas': !exists(json, 'readyReplicas') ? undefined : json['readyReplicas'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
    };
}

export function V1VirtualMachineInstanceReplicaSetStatusToJSON(value?: V1VirtualMachineInstanceReplicaSetStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1VirtualMachineInstanceReplicaSetConditionToJSON)),
        'labelSelector': value.labelSelector,
        'readyReplicas': value.readyReplicas,
        'replicas': value.replicas,
    };
}

