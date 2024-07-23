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
 * VolumeMountStatus shows status of volume mounts.
 * @export
 * @interface IoK8sApiCoreV1VolumeMountStatus
 */
export interface IoK8sApiCoreV1VolumeMountStatus {
    /**
     * MountPath corresponds to the original VolumeMount.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMountStatus
     */
    mountPath: string;
    /**
     * Name corresponds to the name of the original VolumeMount.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMountStatus
     */
    name: string;
    /**
     * ReadOnly corresponds to the original VolumeMount.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1VolumeMountStatus
     */
    readOnly?: boolean;
    /**
     * RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMountStatus
     */
    recursiveReadOnly?: string;
}

export function IoK8sApiCoreV1VolumeMountStatusFromJSON(json: any): IoK8sApiCoreV1VolumeMountStatus {
    return IoK8sApiCoreV1VolumeMountStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1VolumeMountStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1VolumeMountStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mountPath': json['mountPath'],
        'name': json['name'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'recursiveReadOnly': !exists(json, 'recursiveReadOnly') ? undefined : json['recursiveReadOnly'],
    };
}

export function IoK8sApiCoreV1VolumeMountStatusToJSON(value?: IoK8sApiCoreV1VolumeMountStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mountPath': value.mountPath,
        'name': value.name,
        'readOnly': value.readOnly,
        'recursiveReadOnly': value.recursiveReadOnly,
    };
}

