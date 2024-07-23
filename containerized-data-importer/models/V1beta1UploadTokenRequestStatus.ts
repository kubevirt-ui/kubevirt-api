/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
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
 * UploadTokenRequestStatus stores the status of a token request
 * @export
 * @interface V1beta1UploadTokenRequestStatus
 */
export interface V1beta1UploadTokenRequestStatus {
    /**
     * Token is a JWT token to be inserted in "Authentication Bearer header"
     * @type {string}
     * @memberof V1beta1UploadTokenRequestStatus
     */
    token?: string;
}

export function V1beta1UploadTokenRequestStatusFromJSON(json: any): V1beta1UploadTokenRequestStatus {
    return V1beta1UploadTokenRequestStatusFromJSONTyped(json, false);
}

export function V1beta1UploadTokenRequestStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1UploadTokenRequestStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function V1beta1UploadTokenRequestStatusToJSON(value?: V1beta1UploadTokenRequestStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}

