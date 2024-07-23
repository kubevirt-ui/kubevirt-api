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
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1GlusterfsVolumeSource
 */
export interface IoK8sApiCoreV1GlusterfsVolumeSource {
    /**
     * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof IoK8sApiCoreV1GlusterfsVolumeSource
     */
    endpoints: string;
    /**
     * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {string}
     * @memberof IoK8sApiCoreV1GlusterfsVolumeSource
     */
    path: string;
    /**
     * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
     * @type {boolean}
     * @memberof IoK8sApiCoreV1GlusterfsVolumeSource
     */
    readOnly?: boolean;
}

export function IoK8sApiCoreV1GlusterfsVolumeSourceFromJSON(json: any): IoK8sApiCoreV1GlusterfsVolumeSource {
    return IoK8sApiCoreV1GlusterfsVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1GlusterfsVolumeSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1GlusterfsVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endpoints': json['endpoints'],
        'path': json['path'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function IoK8sApiCoreV1GlusterfsVolumeSourceToJSON(value?: IoK8sApiCoreV1GlusterfsVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endpoints': value.endpoints,
        'path': value.path,
        'readOnly': value.readOnly,
    };
}

