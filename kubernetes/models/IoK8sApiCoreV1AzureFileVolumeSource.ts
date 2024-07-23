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
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 * @export
 * @interface IoK8sApiCoreV1AzureFileVolumeSource
 */
export interface IoK8sApiCoreV1AzureFileVolumeSource {
    /**
     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1AzureFileVolumeSource
     */
    readOnly?: boolean;
    /**
     * secretName is the  name of secret that contains Azure Storage Account Name and Key
     * @type {string}
     * @memberof IoK8sApiCoreV1AzureFileVolumeSource
     */
    secretName: string;
    /**
     * shareName is the azure share Name
     * @type {string}
     * @memberof IoK8sApiCoreV1AzureFileVolumeSource
     */
    shareName: string;
}

export function IoK8sApiCoreV1AzureFileVolumeSourceFromJSON(json: any): IoK8sApiCoreV1AzureFileVolumeSource {
    return IoK8sApiCoreV1AzureFileVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1AzureFileVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1AzureFileVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretName': json['secretName'],
        'shareName': json['shareName'],
    };
}

export function IoK8sApiCoreV1AzureFileVolumeSourceToJSON(value?: IoK8sApiCoreV1AzureFileVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'readOnly': value.readOnly,
        'secretName': value.secretName,
        'shareName': value.shareName,
    };
}

