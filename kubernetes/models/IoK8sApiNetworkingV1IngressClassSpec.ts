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
    IoK8sApiNetworkingV1IngressClassParametersReference,
    IoK8sApiNetworkingV1IngressClassParametersReferenceFromJSON,
    IoK8sApiNetworkingV1IngressClassParametersReferenceFromJSONTyped,
    IoK8sApiNetworkingV1IngressClassParametersReferenceToJSON,
} from './';

/**
 * IngressClassSpec provides information about the class of an Ingress.
 * @export
 * @interface IoK8sApiNetworkingV1IngressClassSpec
 */
export interface IoK8sApiNetworkingV1IngressClassSpec {
    /**
     * controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressClassSpec
     */
    controller?: string;
    /**
     * 
     * @type {IoK8sApiNetworkingV1IngressClassParametersReference}
     * @memberof IoK8sApiNetworkingV1IngressClassSpec
     */
    parameters?: IoK8sApiNetworkingV1IngressClassParametersReference;
}

export function IoK8sApiNetworkingV1IngressClassSpecFromJSON(json: any): IoK8sApiNetworkingV1IngressClassSpec {
    return IoK8sApiNetworkingV1IngressClassSpecFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressClassSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1IngressClassSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'controller': !exists(json, 'controller') ? undefined : json['controller'],
        'parameters': !exists(json, 'parameters') ? undefined : IoK8sApiNetworkingV1IngressClassParametersReferenceFromJSON(json['parameters']),
    };
}

export function IoK8sApiNetworkingV1IngressClassSpecToJSON(value?: IoK8sApiNetworkingV1IngressClassSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'controller': value.controller,
        'parameters': IoK8sApiNetworkingV1IngressClassParametersReferenceToJSON(value.parameters),
    };
}

