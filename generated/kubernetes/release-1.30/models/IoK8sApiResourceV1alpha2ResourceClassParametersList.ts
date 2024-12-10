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
    IoK8sApiResourceV1alpha2ResourceClassParameters,
    IoK8sApiResourceV1alpha2ResourceClassParametersFromJSON,
    IoK8sApiResourceV1alpha2ResourceClassParametersFromJSONTyped,
    IoK8sApiResourceV1alpha2ResourceClassParametersToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * ResourceClassParametersList is a collection of ResourceClassParameters.
 * @export
 * @interface IoK8sApiResourceV1alpha2ResourceClassParametersList
 */
export interface IoK8sApiResourceV1alpha2ResourceClassParametersList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClassParametersList
     */
    apiVersion?: string;
    /**
     * Items is the list of node resource capacity objects.
     * @type {Array<IoK8sApiResourceV1alpha2ResourceClassParameters>}
     * @memberof IoK8sApiResourceV1alpha2ResourceClassParametersList
     */
    items: Array<IoK8sApiResourceV1alpha2ResourceClassParameters>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClassParametersList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiResourceV1alpha2ResourceClassParametersList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiResourceV1alpha2ResourceClassParametersListFromJSON(json: any): IoK8sApiResourceV1alpha2ResourceClassParametersList {
    return IoK8sApiResourceV1alpha2ResourceClassParametersListFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2ResourceClassParametersListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2ResourceClassParametersList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiResourceV1alpha2ResourceClassParametersFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiResourceV1alpha2ResourceClassParametersListToJSON(value?: IoK8sApiResourceV1alpha2ResourceClassParametersList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiResourceV1alpha2ResourceClassParametersToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}
