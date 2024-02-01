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
 * ServiceCIDRSpec define the CIDRs the user wants to use for allocating ClusterIPs for Services.
 * @export
 * @interface IoK8sApiNetworkingV1alpha1ServiceCIDRSpec
 */
export interface IoK8sApiNetworkingV1alpha1ServiceCIDRSpec {
    /**
     * CIDRs defines the IP blocks in CIDR notation (e.g. "192.168.0.0/24" or "2001:db8::/64") from which to assign service cluster IPs. Max of two CIDRs is allowed, one of each IP family. This field is immutable.
     * @type {Array<string>}
     * @memberof IoK8sApiNetworkingV1alpha1ServiceCIDRSpec
     */
    cidrs?: Array<string>;
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRSpecFromJSON(json: any): IoK8sApiNetworkingV1alpha1ServiceCIDRSpec {
    return IoK8sApiNetworkingV1alpha1ServiceCIDRSpecFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1alpha1ServiceCIDRSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cidrs': !exists(json, 'cidrs') ? undefined : json['cidrs'],
    };
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRSpecToJSON(value?: IoK8sApiNetworkingV1alpha1ServiceCIDRSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cidrs': value.cidrs,
    };
}
