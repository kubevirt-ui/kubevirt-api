/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery,
    K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSON,
    K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscoveryToJSON,
    K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR,
    K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSON,
    K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDRToJSON,
} from './';

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1APIGroup
 */
export interface K8sIoApimachineryPkgApisMetaV1APIGroup {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroup
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroup
     */
    kind?: string;
    /**
     * name is the name of the group.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroup
     */
    name: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroup
     */
    preferredVersion?: K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery;
    /**
     * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
     * @type {Array<K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR>}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroup
     */
    serverAddressByClientCIDRs?: Array<K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
    /**
     * versions are the versions supported in this group.
     * @type {Array<K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery>}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroup
     */
    versions: Array<K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery>;
}

export function K8sIoApimachineryPkgApisMetaV1APIGroupFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1APIGroup {
    return K8sIoApimachineryPkgApisMetaV1APIGroupFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1APIGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1APIGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': json['name'],
        'preferredVersion': !exists(json, 'preferredVersion') ? undefined : K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSON(json['preferredVersion']),
        'serverAddressByClientCIDRs': !exists(json, 'serverAddressByClientCIDRs') ? undefined : ((json['serverAddressByClientCIDRs'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSON)),
        'versions': ((json['versions'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscoveryFromJSON)),
    };
}

export function K8sIoApimachineryPkgApisMetaV1APIGroupToJSON(value?: K8sIoApimachineryPkgApisMetaV1APIGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'name': value.name,
        'preferredVersion': K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscoveryToJSON(value.preferredVersion),
        'serverAddressByClientCIDRs': value.serverAddressByClientCIDRs === undefined ? undefined : ((value.serverAddressByClientCIDRs as Array<any>).map(K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDRToJSON)),
        'versions': ((value.versions as Array<any>).map(K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscoveryToJSON)),
    };
}

