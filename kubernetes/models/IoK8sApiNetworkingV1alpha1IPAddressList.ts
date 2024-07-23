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
    IoK8sApiNetworkingV1alpha1IPAddress,
    IoK8sApiNetworkingV1alpha1IPAddressFromJSON,
    IoK8sApiNetworkingV1alpha1IPAddressFromJSONTyped,
    IoK8sApiNetworkingV1alpha1IPAddressToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * IPAddressList contains a list of IPAddress.
 * @export
 * @interface IoK8sApiNetworkingV1alpha1IPAddressList
 */
export interface IoK8sApiNetworkingV1alpha1IPAddressList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiNetworkingV1alpha1IPAddressList
     */
    apiVersion?: string;
    /**
     * items is the list of IPAddresses.
     * @type {Array<IoK8sApiNetworkingV1alpha1IPAddress>}
     * @memberof IoK8sApiNetworkingV1alpha1IPAddressList
     */
    items: Array<IoK8sApiNetworkingV1alpha1IPAddress>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiNetworkingV1alpha1IPAddressList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiNetworkingV1alpha1IPAddressList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiNetworkingV1alpha1IPAddressListFromJSON(json: any): IoK8sApiNetworkingV1alpha1IPAddressList {
    return IoK8sApiNetworkingV1alpha1IPAddressListFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1alpha1IPAddressListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1alpha1IPAddressList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiNetworkingV1alpha1IPAddressFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiNetworkingV1alpha1IPAddressListToJSON(value?: IoK8sApiNetworkingV1alpha1IPAddressList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiNetworkingV1alpha1IPAddressToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

