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
 * ServicePort contains information on service's port.
 * @export
 * @interface IoK8sApiCoreV1ServicePort
 */
export interface IoK8sApiCoreV1ServicePort {
    /**
     * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
     * 
     * * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
     * 
     * * Kubernetes-defined prefixed names:
     *   * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-
     *   * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455
     *   * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
     * 
     * * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
     * @type {string}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    appProtocol?: string;
    /**
     * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
     * @type {string}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    name?: string;
    /**
     * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
     * @type {number}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    nodePort?: number;
    /**
     * The port that will be exposed by this service.
     * @type {number}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    port: number;
    /**
     * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
     * @type {string}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    protocol?: string;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    targetPort?: string;
}

export function IoK8sApiCoreV1ServicePortFromJSON(json: any): IoK8sApiCoreV1ServicePort {
    return IoK8sApiCoreV1ServicePortFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ServicePortFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ServicePort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appProtocol': !exists(json, 'appProtocol') ? undefined : json['appProtocol'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nodePort': !exists(json, 'nodePort') ? undefined : json['nodePort'],
        'port': json['port'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
        'targetPort': !exists(json, 'targetPort') ? undefined : json['targetPort'],
    };
}

export function IoK8sApiCoreV1ServicePortToJSON(value?: IoK8sApiCoreV1ServicePort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appProtocol': value.appProtocol,
        'name': value.name,
        'nodePort': value.nodePort,
        'port': value.port,
        'protocol': value.protocol,
        'targetPort': value.targetPort,
    };
}

