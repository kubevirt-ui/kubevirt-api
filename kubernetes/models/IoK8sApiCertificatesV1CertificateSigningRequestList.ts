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
    IoK8sApiCertificatesV1CertificateSigningRequest,
    IoK8sApiCertificatesV1CertificateSigningRequestFromJSON,
    IoK8sApiCertificatesV1CertificateSigningRequestFromJSONTyped,
    IoK8sApiCertificatesV1CertificateSigningRequestToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 * @export
 * @interface IoK8sApiCertificatesV1CertificateSigningRequestList
 */
export interface IoK8sApiCertificatesV1CertificateSigningRequestList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequestList
     */
    apiVersion?: string;
    /**
     * items is a collection of CertificateSigningRequest objects
     * @type {Array<IoK8sApiCertificatesV1CertificateSigningRequest>}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequestList
     */
    items: Array<IoK8sApiCertificatesV1CertificateSigningRequest>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequestList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequestList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiCertificatesV1CertificateSigningRequestListFromJSON(json: any): IoK8sApiCertificatesV1CertificateSigningRequestList {
    return IoK8sApiCertificatesV1CertificateSigningRequestListFromJSONTyped(json, false);
}

export function IoK8sApiCertificatesV1CertificateSigningRequestListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCertificatesV1CertificateSigningRequestList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiCertificatesV1CertificateSigningRequestFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCertificatesV1CertificateSigningRequestListToJSON(value?: IoK8sApiCertificatesV1CertificateSigningRequestList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiCertificatesV1CertificateSigningRequestToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

