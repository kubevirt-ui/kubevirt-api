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
    V1InitrdInfo,
    V1InitrdInfoFromJSON,
    V1InitrdInfoFromJSONTyped,
    V1InitrdInfoToJSON,
    V1KernelInfo,
    V1KernelInfoFromJSON,
    V1KernelInfoFromJSONTyped,
    V1KernelInfoToJSON,
} from './';

/**
 * KernelBootStatus contains info about the kernelBootContainer
 * @export
 * @interface V1KernelBootStatus
 */
export interface V1KernelBootStatus {
    /**
     * 
     * @type {V1InitrdInfo}
     * @memberof V1KernelBootStatus
     */
    initrdInfo?: V1InitrdInfo;
    /**
     * 
     * @type {V1KernelInfo}
     * @memberof V1KernelBootStatus
     */
    kernelInfo?: V1KernelInfo;
}

export function V1KernelBootStatusFromJSON(json: any): V1KernelBootStatus {
    return V1KernelBootStatusFromJSONTyped(json, false);
}

export function V1KernelBootStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KernelBootStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'initrdInfo': !exists(json, 'initrdInfo') ? undefined : V1InitrdInfoFromJSON(json['initrdInfo']),
        'kernelInfo': !exists(json, 'kernelInfo') ? undefined : V1KernelInfoFromJSON(json['kernelInfo']),
    };
}

export function V1KernelBootStatusToJSON(value?: V1KernelBootStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'initrdInfo': V1InitrdInfoToJSON(value.initrdInfo),
        'kernelInfo': V1KernelInfoToJSON(value.kernelInfo),
    };
}

