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
    IoK8sApiCoreV1ObjectReference,
    IoK8sApiCoreV1ObjectReferenceFromJSON,
    IoK8sApiCoreV1ObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1ObjectReferenceToJSON,
    IoK8sApiDiscoveryV1EndpointConditions,
    IoK8sApiDiscoveryV1EndpointConditionsFromJSON,
    IoK8sApiDiscoveryV1EndpointConditionsFromJSONTyped,
    IoK8sApiDiscoveryV1EndpointConditionsToJSON,
    IoK8sApiDiscoveryV1EndpointHints,
    IoK8sApiDiscoveryV1EndpointHintsFromJSON,
    IoK8sApiDiscoveryV1EndpointHintsFromJSONTyped,
    IoK8sApiDiscoveryV1EndpointHintsToJSON,
} from './';

/**
 * Endpoint represents a single logical "backend" implementing a service.
 * @export
 * @interface IoK8sApiDiscoveryV1Endpoint
 */
export interface IoK8sApiDiscoveryV1Endpoint {
    /**
     * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
     * @type {Array<string>}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    addresses: Array<string>;
    /**
     * 
     * @type {IoK8sApiDiscoveryV1EndpointConditions}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    conditions?: IoK8sApiDiscoveryV1EndpointConditions;
    /**
     * deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    deprecatedTopology?: { [key: string]: string; };
    /**
     * 
     * @type {IoK8sApiDiscoveryV1EndpointHints}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    hints?: IoK8sApiDiscoveryV1EndpointHints;
    /**
     * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    hostname?: string;
    /**
     * nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    nodeName?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectReference}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    targetRef?: IoK8sApiCoreV1ObjectReference;
    /**
     * zone is the name of the Zone this endpoint exists in.
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1Endpoint
     */
    zone?: string;
}

export function IoK8sApiDiscoveryV1EndpointFromJSON(json: any): IoK8sApiDiscoveryV1Endpoint {
    return IoK8sApiDiscoveryV1EndpointFromJSONTyped(json, false);
}

export function IoK8sApiDiscoveryV1EndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiDiscoveryV1Endpoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': json['addresses'],
        'conditions': !exists(json, 'conditions') ? undefined : IoK8sApiDiscoveryV1EndpointConditionsFromJSON(json['conditions']),
        'deprecatedTopology': !exists(json, 'deprecatedTopology') ? undefined : json['deprecatedTopology'],
        'hints': !exists(json, 'hints') ? undefined : IoK8sApiDiscoveryV1EndpointHintsFromJSON(json['hints']),
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'nodeName': !exists(json, 'nodeName') ? undefined : json['nodeName'],
        'targetRef': !exists(json, 'targetRef') ? undefined : IoK8sApiCoreV1ObjectReferenceFromJSON(json['targetRef']),
        'zone': !exists(json, 'zone') ? undefined : json['zone'],
    };
}

export function IoK8sApiDiscoveryV1EndpointToJSON(value?: IoK8sApiDiscoveryV1Endpoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses,
        'conditions': IoK8sApiDiscoveryV1EndpointConditionsToJSON(value.conditions),
        'deprecatedTopology': value.deprecatedTopology,
        'hints': IoK8sApiDiscoveryV1EndpointHintsToJSON(value.hints),
        'hostname': value.hostname,
        'nodeName': value.nodeName,
        'targetRef': IoK8sApiCoreV1ObjectReferenceToJSON(value.targetRef),
        'zone': value.zone,
    };
}

