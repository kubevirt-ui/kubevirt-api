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
import {
    IoK8sApiCoreV1LinuxContainerUser,
    IoK8sApiCoreV1LinuxContainerUserFromJSON,
    IoK8sApiCoreV1LinuxContainerUserFromJSONTyped,
    IoK8sApiCoreV1LinuxContainerUserToJSON,
} from './';

/**
 * ContainerUser represents user identity information
 * @export
 * @interface IoK8sApiCoreV1ContainerUser
 */
export interface IoK8sApiCoreV1ContainerUser {
    /**
     * 
     * @type {IoK8sApiCoreV1LinuxContainerUser}
     * @memberof IoK8sApiCoreV1ContainerUser
     */
    linux?: IoK8sApiCoreV1LinuxContainerUser;
}

export function IoK8sApiCoreV1ContainerUserFromJSON(json: any): IoK8sApiCoreV1ContainerUser {
    return IoK8sApiCoreV1ContainerUserFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ContainerUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linux': !exists(json, 'linux') ? undefined : IoK8sApiCoreV1LinuxContainerUserFromJSON(json['linux']),
    };
}

export function IoK8sApiCoreV1ContainerUserToJSON(value?: IoK8sApiCoreV1ContainerUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linux': IoK8sApiCoreV1LinuxContainerUserToJSON(value.linux),
    };
}

