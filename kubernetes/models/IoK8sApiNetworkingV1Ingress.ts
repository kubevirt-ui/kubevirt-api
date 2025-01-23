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
    IoK8sApiNetworkingV1IngressSpec,
    IoK8sApiNetworkingV1IngressSpecFromJSON,
    IoK8sApiNetworkingV1IngressSpecFromJSONTyped,
    IoK8sApiNetworkingV1IngressSpecToJSON,
    IoK8sApiNetworkingV1IngressStatus,
    IoK8sApiNetworkingV1IngressStatusFromJSON,
    IoK8sApiNetworkingV1IngressStatusFromJSONTyped,
    IoK8sApiNetworkingV1IngressStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 * @export
 * @interface IoK8sApiNetworkingV1Ingress
 */
export interface IoK8sApiNetworkingV1Ingress {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiNetworkingV1Ingress
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiNetworkingV1Ingress
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiNetworkingV1Ingress
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiNetworkingV1IngressSpec}
     * @memberof IoK8sApiNetworkingV1Ingress
     */
    spec?: IoK8sApiNetworkingV1IngressSpec;
    /**
     * 
     * @type {IoK8sApiNetworkingV1IngressStatus}
     * @memberof IoK8sApiNetworkingV1Ingress
     */
    status?: IoK8sApiNetworkingV1IngressStatus;
}

export function IoK8sApiNetworkingV1IngressFromJSON(json: any): IoK8sApiNetworkingV1Ingress {
    return IoK8sApiNetworkingV1IngressFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1Ingress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiNetworkingV1IngressSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiNetworkingV1IngressStatusFromJSON(json['status']),
    };
}

export function IoK8sApiNetworkingV1IngressToJSON(value?: IoK8sApiNetworkingV1Ingress | null): any {
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
        'spec': IoK8sApiNetworkingV1IngressSpecToJSON(value.spec),
        'status': IoK8sApiNetworkingV1IngressStatusToJSON(value.status),
    };
}

