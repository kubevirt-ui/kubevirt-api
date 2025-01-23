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
/**
 * DataVolumeSourceHTTP can be either an http or https endpoint, with an optional basic auth user name and password, and an optional configmap containing additional CAs
 * @export
 * @interface V1beta1DataVolumeSourceHTTP
 */
export interface V1beta1DataVolumeSourceHTTP {
    /**
     * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
     * @type {string}
     * @memberof V1beta1DataVolumeSourceHTTP
     */
    certConfigMap?: string;
    /**
     * ExtraHeaders is a list of strings containing extra headers to include with HTTP transfer requests
     * @type {Array<string>}
     * @memberof V1beta1DataVolumeSourceHTTP
     */
    extraHeaders?: Array<string>;
    /**
     * SecretExtraHeaders is a list of Secret references, each containing an extra HTTP header that may include sensitive information
     * @type {Array<string>}
     * @memberof V1beta1DataVolumeSourceHTTP
     */
    secretExtraHeaders?: Array<string>;
    /**
     * SecretRef A Secret reference, the secret should contain accessKeyId (user name) base64 encoded, and secretKey (password) also base64 encoded
     * @type {string}
     * @memberof V1beta1DataVolumeSourceHTTP
     */
    secretRef?: string;
    /**
     * URL is the URL of the http(s) endpoint
     * @type {string}
     * @memberof V1beta1DataVolumeSourceHTTP
     */
    url: string;
}

export function V1beta1DataVolumeSourceHTTPFromJSON(json: any): V1beta1DataVolumeSourceHTTP {
    return V1beta1DataVolumeSourceHTTPFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceHTTPFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceHTTP {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certConfigMap': !exists(json, 'certConfigMap') ? undefined : json['certConfigMap'],
        'extraHeaders': !exists(json, 'extraHeaders') ? undefined : json['extraHeaders'],
        'secretExtraHeaders': !exists(json, 'secretExtraHeaders') ? undefined : json['secretExtraHeaders'],
        'secretRef': !exists(json, 'secretRef') ? undefined : json['secretRef'],
        'url': json['url'],
    };
}

export function V1beta1DataVolumeSourceHTTPToJSON(value?: V1beta1DataVolumeSourceHTTP | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certConfigMap': value.certConfigMap,
        'extraHeaders': value.extraHeaders,
        'secretExtraHeaders': value.secretExtraHeaders,
        'secretRef': value.secretRef,
        'url': value.url,
    };
}

