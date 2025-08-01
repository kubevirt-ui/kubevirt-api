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
    V1VirtualMachineInstanceMigrationSource,
    V1VirtualMachineInstanceMigrationSourceFromJSON,
    V1VirtualMachineInstanceMigrationSourceFromJSONTyped,
    V1VirtualMachineInstanceMigrationSourceToJSON,
    V1VirtualMachineInstanceMigrationTarget,
    V1VirtualMachineInstanceMigrationTargetFromJSON,
    V1VirtualMachineInstanceMigrationTargetFromJSONTyped,
    V1VirtualMachineInstanceMigrationTargetToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1VirtualMachineInstanceMigrationSpec
 */
export interface V1VirtualMachineInstanceMigrationSpec {
    /**
     * AddedNodeSelector is an additional selector that can be used to complement a NodeSelector or NodeAffinity as set on the VM to restrict the set of allowed target nodes for a migration. In case of key collisions, values set on the VM objects are going to be preserved to ensure that addedNodeSelector can only restrict but not bypass constraints already set on the VM object.
     * @type {{ [key: string]: string; }}
     * @memberof V1VirtualMachineInstanceMigrationSpec
     */
    addedNodeSelector?: { [key: string]: string; };
    /**
     * 
     * @type {V1VirtualMachineInstanceMigrationTarget}
     * @memberof V1VirtualMachineInstanceMigrationSpec
     */
    receive?: V1VirtualMachineInstanceMigrationTarget;
    /**
     * 
     * @type {V1VirtualMachineInstanceMigrationSource}
     * @memberof V1VirtualMachineInstanceMigrationSpec
     */
    sendTo?: V1VirtualMachineInstanceMigrationSource;
    /**
     * The name of the VMI to perform the migration on. VMI must exist in the migration objects namespace
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationSpec
     */
    vmiName?: string;
}

export function V1VirtualMachineInstanceMigrationSpecFromJSON(json: any): V1VirtualMachineInstanceMigrationSpec {
    return V1VirtualMachineInstanceMigrationSpecFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceMigrationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceMigrationSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addedNodeSelector': !exists(json, 'addedNodeSelector') ? undefined : json['addedNodeSelector'],
        'receive': !exists(json, 'receive') ? undefined : V1VirtualMachineInstanceMigrationTargetFromJSON(json['receive']),
        'sendTo': !exists(json, 'sendTo') ? undefined : V1VirtualMachineInstanceMigrationSourceFromJSON(json['sendTo']),
        'vmiName': !exists(json, 'vmiName') ? undefined : json['vmiName'],
    };
}

export function V1VirtualMachineInstanceMigrationSpecToJSON(value?: V1VirtualMachineInstanceMigrationSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addedNodeSelector': value.addedNodeSelector,
        'receive': V1VirtualMachineInstanceMigrationTargetToJSON(value.receive),
        'sendTo': V1VirtualMachineInstanceMigrationSourceToJSON(value.sendTo),
        'vmiName': value.vmiName,
    };
}

