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
/**
 * ContainerPort represents a network port in a single container.
 * @export
 * @interface IoK8sApiCoreV1ContainerPort
 */
export interface IoK8sApiCoreV1ContainerPort {
    /**
     * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
     * @type {number}
     * @memberof IoK8sApiCoreV1ContainerPort
     */
    containerPort: number;
    /**
     * What host IP to bind the external port to.
     * @type {string}
     * @memberof IoK8sApiCoreV1ContainerPort
     */
    hostIP?: string;
    /**
     * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
     * @type {number}
     * @memberof IoK8sApiCoreV1ContainerPort
     */
    hostPort?: number;
    /**
     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
     * @type {string}
     * @memberof IoK8sApiCoreV1ContainerPort
     */
    name?: string;
    /**
     * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
     * @type {string}
     * @memberof IoK8sApiCoreV1ContainerPort
     */
    protocol?: string;
}

export function IoK8sApiCoreV1ContainerPortFromJSON(json: any): IoK8sApiCoreV1ContainerPort {
    return IoK8sApiCoreV1ContainerPortFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerPortFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1ContainerPort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerPort': json['containerPort'],
        'hostIP': !exists(json, 'hostIP') ? undefined : json['hostIP'],
        'hostPort': !exists(json, 'hostPort') ? undefined : json['hostPort'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
    };
}

export function IoK8sApiCoreV1ContainerPortToJSON(value?: IoK8sApiCoreV1ContainerPort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerPort': value.containerPort,
        'hostIP': value.hostIP,
        'hostPort': value.hostPort,
        'name': value.name,
        'protocol': value.protocol,
    };
}

