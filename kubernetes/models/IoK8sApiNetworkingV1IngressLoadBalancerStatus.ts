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
    IoK8sApiNetworkingV1IngressLoadBalancerIngress,
    IoK8sApiNetworkingV1IngressLoadBalancerIngressFromJSON,
    IoK8sApiNetworkingV1IngressLoadBalancerIngressFromJSONTyped,
    IoK8sApiNetworkingV1IngressLoadBalancerIngressToJSON,
} from './';

/**
 * IngressLoadBalancerStatus represents the status of a load-balancer.
 * @export
 * @interface IoK8sApiNetworkingV1IngressLoadBalancerStatus
 */
export interface IoK8sApiNetworkingV1IngressLoadBalancerStatus {
    /**
     * ingress is a list containing ingress points for the load-balancer.
     * @type {Array<IoK8sApiNetworkingV1IngressLoadBalancerIngress>}
     * @memberof IoK8sApiNetworkingV1IngressLoadBalancerStatus
     */
    ingress?: Array<IoK8sApiNetworkingV1IngressLoadBalancerIngress>;
}

export function IoK8sApiNetworkingV1IngressLoadBalancerStatusFromJSON(json: any): IoK8sApiNetworkingV1IngressLoadBalancerStatus {
    return IoK8sApiNetworkingV1IngressLoadBalancerStatusFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressLoadBalancerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1IngressLoadBalancerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ingress': !exists(json, 'ingress') ? undefined : ((json['ingress'] as Array<any>).map(IoK8sApiNetworkingV1IngressLoadBalancerIngressFromJSON)),
    };
}

export function IoK8sApiNetworkingV1IngressLoadBalancerStatusToJSON(value?: IoK8sApiNetworkingV1IngressLoadBalancerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ingress': value.ingress === undefined ? undefined : ((value.ingress as Array<any>).map(IoK8sApiNetworkingV1IngressLoadBalancerIngressToJSON)),
    };
}

