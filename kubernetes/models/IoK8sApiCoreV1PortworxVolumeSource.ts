/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * PortworxVolumeSource represents a Portworx volume resource.
 * @export
 * @interface IoK8sApiCoreV1PortworxVolumeSource
 */
export interface IoK8sApiCoreV1PortworxVolumeSource {
    /**
     * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
     * @type {string}
     * @memberof IoK8sApiCoreV1PortworxVolumeSource
     */
    fsType?: string;
    /**
     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1PortworxVolumeSource
     */
    readOnly?: boolean;
    /**
     * volumeID uniquely identifies a Portworx volume
     * @type {string}
     * @memberof IoK8sApiCoreV1PortworxVolumeSource
     */
    volumeID: string;
}

export function IoK8sApiCoreV1PortworxVolumeSourceFromJSON(json: any): IoK8sApiCoreV1PortworxVolumeSource {
    return IoK8sApiCoreV1PortworxVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PortworxVolumeSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1PortworxVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'volumeID': json['volumeID'],
    };
}

export function IoK8sApiCoreV1PortworxVolumeSourceToJSON(value?: IoK8sApiCoreV1PortworxVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'volumeID': value.volumeID,
    };
}

