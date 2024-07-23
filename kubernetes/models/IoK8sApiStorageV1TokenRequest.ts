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
 * TokenRequest contains parameters of a service account token.
 * @export
 * @interface IoK8sApiStorageV1TokenRequest
 */
export interface IoK8sApiStorageV1TokenRequest {
    /**
     * audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver.
     * @type {string}
     * @memberof IoK8sApiStorageV1TokenRequest
     */
    audience: string;
    /**
     * expirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec".
     * @type {number}
     * @memberof IoK8sApiStorageV1TokenRequest
     */
    expirationSeconds?: number;
}

export function IoK8sApiStorageV1TokenRequestFromJSON(json: any): IoK8sApiStorageV1TokenRequest {
    return IoK8sApiStorageV1TokenRequestFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1TokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1TokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audience': json['audience'],
        'expirationSeconds': !exists(json, 'expirationSeconds') ? undefined : json['expirationSeconds'],
    };
}

export function IoK8sApiStorageV1TokenRequestToJSON(value?: IoK8sApiStorageV1TokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audience': value.audience,
        'expirationSeconds': value.expirationSeconds,
    };
}

