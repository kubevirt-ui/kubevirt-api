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
    IoK8sApimachineryPkgApisMetaV1APIResource,
    IoK8sApimachineryPkgApisMetaV1APIResourceFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1APIResourceToJSON,
} from './';

/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1APIResourceList
 */
export interface IoK8sApimachineryPkgApisMetaV1APIResourceList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIResourceList
     */
    apiVersion?: string;
    /**
     * groupVersion is the group and version this APIResourceList is for.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIResourceList
     */
    groupVersion: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIResourceList
     */
    kind?: string;
    /**
     * resources contains the name of the resources and if they are namespaced.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1APIResource>}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIResourceList
     */
    resources: Array<IoK8sApimachineryPkgApisMetaV1APIResource>;
}

export function IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1APIResourceList {
    return IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApimachineryPkgApisMetaV1APIResourceList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'groupVersion': json['groupVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'resources': ((json['resources'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1APIResourceFromJSON)),
    };
}

export function IoK8sApimachineryPkgApisMetaV1APIResourceListToJSON(value?: IoK8sApimachineryPkgApisMetaV1APIResourceList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'groupVersion': value.groupVersion,
        'kind': value.kind,
        'resources': ((value.resources as Array<any>).map(IoK8sApimachineryPkgApisMetaV1APIResourceToJSON)),
    };
}

