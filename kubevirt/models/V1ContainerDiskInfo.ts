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
 * ContainerDiskInfo shows info about the containerdisk
 * @export
 * @interface V1ContainerDiskInfo
 */
export interface V1ContainerDiskInfo {
    /**
     * Checksum is the checksum of the rootdisk or kernel artifacts inside the containerdisk
     * @type {number}
     * @memberof V1ContainerDiskInfo
     */
    checksum?: number;
}

export function V1ContainerDiskInfoFromJSON(json: any): V1ContainerDiskInfo {
    return V1ContainerDiskInfoFromJSONTyped(json, false);
}

export function V1ContainerDiskInfoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1ContainerDiskInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checksum': !exists(json, 'checksum') ? undefined : json['checksum'],
    };
}

export function V1ContainerDiskInfoToJSON(value?: V1ContainerDiskInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checksum': value.checksum,
    };
}

