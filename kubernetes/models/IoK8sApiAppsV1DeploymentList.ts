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
    IoK8sApiAppsV1Deployment,
    IoK8sApiAppsV1DeploymentFromJSON,
    IoK8sApiAppsV1DeploymentFromJSONTyped,
    IoK8sApiAppsV1DeploymentToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * DeploymentList is a list of Deployments.
 * @export
 * @interface IoK8sApiAppsV1DeploymentList
 */
export interface IoK8sApiAppsV1DeploymentList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1DeploymentList
     */
    apiVersion?: string;
    /**
     * Items is the list of Deployments.
     * @type {Array<IoK8sApiAppsV1Deployment>}
     * @memberof IoK8sApiAppsV1DeploymentList
     */
    items: Array<IoK8sApiAppsV1Deployment>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1DeploymentList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiAppsV1DeploymentList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiAppsV1DeploymentListFromJSON(json: any): IoK8sApiAppsV1DeploymentList {
    return IoK8sApiAppsV1DeploymentListFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DeploymentListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAppsV1DeploymentList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiAppsV1DeploymentFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiAppsV1DeploymentListToJSON(value?: IoK8sApiAppsV1DeploymentList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiAppsV1DeploymentToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

