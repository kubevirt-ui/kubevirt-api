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
    IoK8sApiStorageV1VolumeAttachmentSpec,
    IoK8sApiStorageV1VolumeAttachmentSpecFromJSON,
    IoK8sApiStorageV1VolumeAttachmentSpecFromJSONTyped,
    IoK8sApiStorageV1VolumeAttachmentSpecToJSON,
    IoK8sApiStorageV1VolumeAttachmentStatus,
    IoK8sApiStorageV1VolumeAttachmentStatusFromJSON,
    IoK8sApiStorageV1VolumeAttachmentStatusFromJSONTyped,
    IoK8sApiStorageV1VolumeAttachmentStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 * @export
 * @interface IoK8sApiStorageV1VolumeAttachment
 */
export interface IoK8sApiStorageV1VolumeAttachment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiStorageV1VolumeAttachmentSpec}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    spec: IoK8sApiStorageV1VolumeAttachmentSpec;
    /**
     * 
     * @type {IoK8sApiStorageV1VolumeAttachmentStatus}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    status?: IoK8sApiStorageV1VolumeAttachmentStatus;
}

export function IoK8sApiStorageV1VolumeAttachmentFromJSON(json: any): IoK8sApiStorageV1VolumeAttachment {
    return IoK8sApiStorageV1VolumeAttachmentFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1VolumeAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1VolumeAttachment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': IoK8sApiStorageV1VolumeAttachmentSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiStorageV1VolumeAttachmentStatusFromJSON(json['status']),
    };
}

export function IoK8sApiStorageV1VolumeAttachmentToJSON(value?: IoK8sApiStorageV1VolumeAttachment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiStorageV1VolumeAttachmentSpecToJSON(value.spec),
        'status': IoK8sApiStorageV1VolumeAttachmentStatusToJSON(value.status),
    };
}

