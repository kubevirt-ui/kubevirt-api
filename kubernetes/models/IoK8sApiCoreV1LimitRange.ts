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
    IoK8sApiCoreV1LimitRangeSpec,
    IoK8sApiCoreV1LimitRangeSpecFromJSON,
    IoK8sApiCoreV1LimitRangeSpecFromJSONTyped,
    IoK8sApiCoreV1LimitRangeSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 * @export
 * @interface IoK8sApiCoreV1LimitRange
 */
export interface IoK8sApiCoreV1LimitRange {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1LimitRange
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1LimitRange
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1LimitRange
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1LimitRangeSpec}
     * @memberof IoK8sApiCoreV1LimitRange
     */
    spec?: IoK8sApiCoreV1LimitRangeSpec;
}

export function IoK8sApiCoreV1LimitRangeFromJSON(json: any): IoK8sApiCoreV1LimitRange {
    return IoK8sApiCoreV1LimitRangeFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LimitRangeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1LimitRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1LimitRangeSpecFromJSON(json['spec']),
    };
}

export function IoK8sApiCoreV1LimitRangeToJSON(value?: IoK8sApiCoreV1LimitRange | null): any {
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
        'spec': IoK8sApiCoreV1LimitRangeSpecToJSON(value.spec),
    };
}

