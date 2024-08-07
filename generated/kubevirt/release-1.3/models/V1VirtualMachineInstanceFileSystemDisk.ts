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
 * VirtualMachineInstanceFileSystemDisk represents the guest os FS disks
 * @export
 * @interface V1VirtualMachineInstanceFileSystemDisk
 */
export interface V1VirtualMachineInstanceFileSystemDisk {
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceFileSystemDisk
     */
    busType: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceFileSystemDisk
     */
    serial?: string;
}

export function V1VirtualMachineInstanceFileSystemDiskFromJSON(json: any): V1VirtualMachineInstanceFileSystemDisk {
    return V1VirtualMachineInstanceFileSystemDiskFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFileSystemDiskFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceFileSystemDisk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'busType': json['busType'],
        'serial': !exists(json, 'serial') ? undefined : json['serial'],
    };
}

export function V1VirtualMachineInstanceFileSystemDiskToJSON(value?: V1VirtualMachineInstanceFileSystemDisk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'busType': value.busType,
        'serial': value.serial,
    };
}

