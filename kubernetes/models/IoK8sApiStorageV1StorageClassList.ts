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
    IoK8sApiStorageV1StorageClass,
    IoK8sApiStorageV1StorageClassFromJSON,
    IoK8sApiStorageV1StorageClassFromJSONTyped,
    IoK8sApiStorageV1StorageClassToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * StorageClassList is a collection of storage classes.
 * @export
 * @interface IoK8sApiStorageV1StorageClassList
 */
export interface IoK8sApiStorageV1StorageClassList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStorageV1StorageClassList
     */
    apiVersion?: string;
    /**
     * items is the list of StorageClasses
     * @type {Array<IoK8sApiStorageV1StorageClass>}
     * @memberof IoK8sApiStorageV1StorageClassList
     */
    items: Array<IoK8sApiStorageV1StorageClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStorageV1StorageClassList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiStorageV1StorageClassList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiStorageV1StorageClassListFromJSON(json: any): IoK8sApiStorageV1StorageClassList {
    return IoK8sApiStorageV1StorageClassListFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1StorageClassListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1StorageClassList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiStorageV1StorageClassFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiStorageV1StorageClassListToJSON(value?: IoK8sApiStorageV1StorageClassList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiStorageV1StorageClassToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

