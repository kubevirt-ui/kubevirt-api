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
    IoK8sApiNetworkingV1IngressBackend,
    IoK8sApiNetworkingV1IngressBackendFromJSON,
    IoK8sApiNetworkingV1IngressBackendFromJSONTyped,
    IoK8sApiNetworkingV1IngressBackendToJSON,
    IoK8sApiNetworkingV1IngressRule,
    IoK8sApiNetworkingV1IngressRuleFromJSON,
    IoK8sApiNetworkingV1IngressRuleFromJSONTyped,
    IoK8sApiNetworkingV1IngressRuleToJSON,
    IoK8sApiNetworkingV1IngressTLS,
    IoK8sApiNetworkingV1IngressTLSFromJSON,
    IoK8sApiNetworkingV1IngressTLSFromJSONTyped,
    IoK8sApiNetworkingV1IngressTLSToJSON,
} from './';

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 * @export
 * @interface IoK8sApiNetworkingV1IngressSpec
 */
export interface IoK8sApiNetworkingV1IngressSpec {
    /**
     * 
     * @type {IoK8sApiNetworkingV1IngressBackend}
     * @memberof IoK8sApiNetworkingV1IngressSpec
     */
    defaultBackend?: IoK8sApiNetworkingV1IngressBackend;
    /**
     * ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressSpec
     */
    ingressClassName?: string;
    /**
     * rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
     * @type {Array<IoK8sApiNetworkingV1IngressRule>}
     * @memberof IoK8sApiNetworkingV1IngressSpec
     */
    rules?: Array<IoK8sApiNetworkingV1IngressRule>;
    /**
     * tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     * @type {Array<IoK8sApiNetworkingV1IngressTLS>}
     * @memberof IoK8sApiNetworkingV1IngressSpec
     */
    tls?: Array<IoK8sApiNetworkingV1IngressTLS>;
}

export function IoK8sApiNetworkingV1IngressSpecFromJSON(json: any): IoK8sApiNetworkingV1IngressSpec {
    return IoK8sApiNetworkingV1IngressSpecFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1IngressSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultBackend': !exists(json, 'defaultBackend') ? undefined : IoK8sApiNetworkingV1IngressBackendFromJSON(json['defaultBackend']),
        'ingressClassName': !exists(json, 'ingressClassName') ? undefined : json['ingressClassName'],
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(IoK8sApiNetworkingV1IngressRuleFromJSON)),
        'tls': !exists(json, 'tls') ? undefined : ((json['tls'] as Array<any>).map(IoK8sApiNetworkingV1IngressTLSFromJSON)),
    };
}

export function IoK8sApiNetworkingV1IngressSpecToJSON(value?: IoK8sApiNetworkingV1IngressSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultBackend': IoK8sApiNetworkingV1IngressBackendToJSON(value.defaultBackend),
        'ingressClassName': value.ingressClassName,
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(IoK8sApiNetworkingV1IngressRuleToJSON)),
        'tls': value.tls === undefined ? undefined : ((value.tls as Array<any>).map(IoK8sApiNetworkingV1IngressTLSToJSON)),
    };
}

