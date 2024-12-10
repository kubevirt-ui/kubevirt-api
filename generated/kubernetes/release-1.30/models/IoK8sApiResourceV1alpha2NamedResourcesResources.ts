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
    IoK8sApiResourceV1alpha2NamedResourcesInstance,
    IoK8sApiResourceV1alpha2NamedResourcesInstanceFromJSON,
    IoK8sApiResourceV1alpha2NamedResourcesInstanceFromJSONTyped,
    IoK8sApiResourceV1alpha2NamedResourcesInstanceToJSON,
} from './';

/**
 * NamedResourcesResources is used in ResourceModel.
 * @export
 * @interface IoK8sApiResourceV1alpha2NamedResourcesResources
 */
export interface IoK8sApiResourceV1alpha2NamedResourcesResources {
    /**
     * The list of all individual resources instances currently available.
     * @type {Array<IoK8sApiResourceV1alpha2NamedResourcesInstance>}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesResources
     */
    instances: Array<IoK8sApiResourceV1alpha2NamedResourcesInstance>;
}

export function IoK8sApiResourceV1alpha2NamedResourcesResourcesFromJSON(json: any): IoK8sApiResourceV1alpha2NamedResourcesResources {
    return IoK8sApiResourceV1alpha2NamedResourcesResourcesFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2NamedResourcesResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2NamedResourcesResources {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'instances': ((json['instances'] as Array<any>).map(IoK8sApiResourceV1alpha2NamedResourcesInstanceFromJSON)),
    };
}

export function IoK8sApiResourceV1alpha2NamedResourcesResourcesToJSON(value?: IoK8sApiResourceV1alpha2NamedResourcesResources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'instances': ((value.instances as Array<any>).map(IoK8sApiResourceV1alpha2NamedResourcesInstanceToJSON)),
    };
}
