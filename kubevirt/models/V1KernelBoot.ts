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
    V1KernelBootContainer,
    V1KernelBootContainerFromJSON,
    V1KernelBootContainerFromJSONTyped,
    V1KernelBootContainerToJSON,
} from './';

/**
 * Represents the firmware blob used to assist in the kernel boot process. Used for setting the kernel, initrd and command line arguments
 * @export
 * @interface V1KernelBoot
 */
export interface V1KernelBoot {
    /**
     * 
     * @type {V1KernelBootContainer}
     * @memberof V1KernelBoot
     */
    container?: V1KernelBootContainer;
    /**
     * Arguments to be passed to the kernel at boot time
     * @type {string}
     * @memberof V1KernelBoot
     */
    kernelArgs?: string;
}

export function V1KernelBootFromJSON(json: any): V1KernelBoot {
    return V1KernelBootFromJSONTyped(json, false);
}

export function V1KernelBootFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KernelBoot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'container': !exists(json, 'container') ? undefined : V1KernelBootContainerFromJSON(json['container']),
        'kernelArgs': !exists(json, 'kernelArgs') ? undefined : json['kernelArgs'],
    };
}

export function V1KernelBootToJSON(value?: V1KernelBoot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'container': V1KernelBootContainerToJSON(value.container),
        'kernelArgs': value.kernelArgs,
    };
}

