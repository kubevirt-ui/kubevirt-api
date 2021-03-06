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
 * EndpointPort is a tuple that describes a single port.
 * @export
 * @interface IoK8sApiCoreV1EndpointPort
 */
export interface IoK8sApiCoreV1EndpointPort {
    /**
     * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    appProtocol?: string;
    /**
     * The name of this port.  This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    name?: string;
    /**
     * The port number of the endpoint.
     * @type {number}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    port: number;
    /**
     * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
     * 
     * Possible enum values:
     *  - `"SCTP"` is the SCTP protocol.
     *  - `"TCP"` is the TCP protocol.
     *  - `"UDP"` is the UDP protocol.
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    protocol?: IoK8sApiCoreV1EndpointPortProtocolEnum;
}

/**
* @export
* @enum {string}
*/
export enum IoK8sApiCoreV1EndpointPortProtocolEnum {
    Sctp = 'SCTP',
    Tcp = 'TCP',
    Udp = 'UDP'
}

export function IoK8sApiCoreV1EndpointPortFromJSON(json: any): IoK8sApiCoreV1EndpointPort {
    return IoK8sApiCoreV1EndpointPortFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EndpointPortFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EndpointPort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appProtocol': !exists(json, 'appProtocol') ? undefined : json['appProtocol'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'port': json['port'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
    };
}

export function IoK8sApiCoreV1EndpointPortToJSON(value?: IoK8sApiCoreV1EndpointPort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appProtocol': value.appProtocol,
        'name': value.name,
        'port': value.port,
        'protocol': value.protocol,
    };
}

