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
    IoK8sApiStorageV1alpha1VolumeAttributesClass,
    IoK8sApiStorageV1alpha1VolumeAttributesClassFromJSON,
    IoK8sApiStorageV1alpha1VolumeAttributesClassFromJSONTyped,
    IoK8sApiStorageV1alpha1VolumeAttributesClassToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * VolumeAttributesClassList is a collection of VolumeAttributesClass objects.
 * @export
 * @interface IoK8sApiStorageV1alpha1VolumeAttributesClassList
 */
export interface IoK8sApiStorageV1alpha1VolumeAttributesClassList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClassList
     */
    apiVersion?: string;
    /**
     * items is the list of VolumeAttributesClass objects.
     * @type {Array<IoK8sApiStorageV1alpha1VolumeAttributesClass>}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClassList
     */
    items: Array<IoK8sApiStorageV1alpha1VolumeAttributesClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClassList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClassList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiStorageV1alpha1VolumeAttributesClassListFromJSON(json: any): IoK8sApiStorageV1alpha1VolumeAttributesClassList {
    return IoK8sApiStorageV1alpha1VolumeAttributesClassListFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1alpha1VolumeAttributesClassListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1alpha1VolumeAttributesClassList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiStorageV1alpha1VolumeAttributesClassFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiStorageV1alpha1VolumeAttributesClassListToJSON(value?: IoK8sApiStorageV1alpha1VolumeAttributesClassList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiStorageV1alpha1VolumeAttributesClassToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

