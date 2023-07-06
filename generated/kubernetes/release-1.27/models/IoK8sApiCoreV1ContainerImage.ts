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
 * Describe a container image
 * @export
 * @interface IoK8sApiCoreV1ContainerImage
 */
export interface IoK8sApiCoreV1ContainerImage {
    /**
     * Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"]
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1ContainerImage
     */
    names?: Array<string>;
    /**
     * The size of the image in bytes.
     * @type {number}
     * @memberof IoK8sApiCoreV1ContainerImage
     */
    sizeBytes?: number;
}

export function IoK8sApiCoreV1ContainerImageFromJSON(json: any): IoK8sApiCoreV1ContainerImage {
    return IoK8sApiCoreV1ContainerImageFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ContainerImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'names': !exists(json, 'names') ? undefined : json['names'],
        'sizeBytes': !exists(json, 'sizeBytes') ? undefined : json['sizeBytes'],
    };
}

export function IoK8sApiCoreV1ContainerImageToJSON(value?: IoK8sApiCoreV1ContainerImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'names': value.names,
        'sizeBytes': value.sizeBytes,
    };
}
