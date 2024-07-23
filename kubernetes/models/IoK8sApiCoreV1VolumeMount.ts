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
 * VolumeMount describes a mounting of a Volume within a container.
 * @export
 * @interface IoK8sApiCoreV1VolumeMount
 */
export interface IoK8sApiCoreV1VolumeMount {
    /**
     * Path within the container at which the volume should be mounted.  Must not contain ':'.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMount
     */
    mountPath: string;
    /**
     * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMount
     */
    mountPropagation?: string;
    /**
     * This must match the Name of a Volume.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMount
     */
    name: string;
    /**
     * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1VolumeMount
     */
    readOnly?: boolean;
    /**
     * RecursiveReadOnly specifies whether read-only mounts should be handled recursively.
     * 
     * If ReadOnly is false, this field has no meaning and must be unspecified.
     * 
     * If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only.  If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime.  If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason.
     * 
     * If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None).
     * 
     * If this field is not specified, it is treated as an equivalent of Disabled.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMount
     */
    recursiveReadOnly?: string;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMount
     */
    subPath?: string;
    /**
     * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeMount
     */
    subPathExpr?: string;
}

export function IoK8sApiCoreV1VolumeMountFromJSON(json: any): IoK8sApiCoreV1VolumeMount {
    return IoK8sApiCoreV1VolumeMountFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1VolumeMountFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1VolumeMount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mountPath': json['mountPath'],
        'mountPropagation': !exists(json, 'mountPropagation') ? undefined : json['mountPropagation'],
        'name': json['name'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'recursiveReadOnly': !exists(json, 'recursiveReadOnly') ? undefined : json['recursiveReadOnly'],
        'subPath': !exists(json, 'subPath') ? undefined : json['subPath'],
        'subPathExpr': !exists(json, 'subPathExpr') ? undefined : json['subPathExpr'],
    };
}

export function IoK8sApiCoreV1VolumeMountToJSON(value?: IoK8sApiCoreV1VolumeMount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mountPath': value.mountPath,
        'mountPropagation': value.mountPropagation,
        'name': value.name,
        'readOnly': value.readOnly,
        'recursiveReadOnly': value.recursiveReadOnly,
        'subPath': value.subPath,
        'subPathExpr': value.subPathExpr,
    };
}

