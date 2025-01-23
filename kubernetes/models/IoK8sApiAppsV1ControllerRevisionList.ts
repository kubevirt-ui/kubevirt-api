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
    IoK8sApiAppsV1ControllerRevision,
    IoK8sApiAppsV1ControllerRevisionFromJSON,
    IoK8sApiAppsV1ControllerRevisionFromJSONTyped,
    IoK8sApiAppsV1ControllerRevisionToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 * @export
 * @interface IoK8sApiAppsV1ControllerRevisionList
 */
export interface IoK8sApiAppsV1ControllerRevisionList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1ControllerRevisionList
     */
    apiVersion?: string;
    /**
     * Items is the list of ControllerRevisions
     * @type {Array<IoK8sApiAppsV1ControllerRevision>}
     * @memberof IoK8sApiAppsV1ControllerRevisionList
     */
    items: Array<IoK8sApiAppsV1ControllerRevision>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1ControllerRevisionList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiAppsV1ControllerRevisionList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiAppsV1ControllerRevisionListFromJSON(json: any): IoK8sApiAppsV1ControllerRevisionList {
    return IoK8sApiAppsV1ControllerRevisionListFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1ControllerRevisionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1ControllerRevisionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiAppsV1ControllerRevisionFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiAppsV1ControllerRevisionListToJSON(value?: IoK8sApiAppsV1ControllerRevisionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiAppsV1ControllerRevisionToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

