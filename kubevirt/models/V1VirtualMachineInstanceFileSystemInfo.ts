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
    V1VirtualMachineInstanceFileSystem,
    V1VirtualMachineInstanceFileSystemFromJSON,
    V1VirtualMachineInstanceFileSystemFromJSONTyped,
    V1VirtualMachineInstanceFileSystemToJSON,
} from './';

/**
 * VirtualMachineInstanceFileSystemInfo represents information regarding single guest os filesystem
 * @export
 * @interface V1VirtualMachineInstanceFileSystemInfo
 */
export interface V1VirtualMachineInstanceFileSystemInfo {
    /**
     * 
     * @type {Array<V1VirtualMachineInstanceFileSystem>}
     * @memberof V1VirtualMachineInstanceFileSystemInfo
     */
    disks: Array<V1VirtualMachineInstanceFileSystem>;
}

export function V1VirtualMachineInstanceFileSystemInfoFromJSON(json: any): V1VirtualMachineInstanceFileSystemInfo {
    return V1VirtualMachineInstanceFileSystemInfoFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFileSystemInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceFileSystemInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disks': ((json['disks'] as Array<any>).map(V1VirtualMachineInstanceFileSystemFromJSON)),
    };
}

export function V1VirtualMachineInstanceFileSystemInfoToJSON(value?: V1VirtualMachineInstanceFileSystemInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disks': ((value.disks as Array<any>).map(V1VirtualMachineInstanceFileSystemToJSON)),
    };
}

