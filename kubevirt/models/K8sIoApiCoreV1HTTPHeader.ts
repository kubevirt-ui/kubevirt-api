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
 * HTTPHeader describes a custom header to be used in HTTP probes
 * @export
 * @interface K8sIoApiCoreV1HTTPHeader
 */
export interface K8sIoApiCoreV1HTTPHeader {
    /**
     * The header field name
     * @type {string}
     * @memberof K8sIoApiCoreV1HTTPHeader
     */
    name: string;
    /**
     * The header field value
     * @type {string}
     * @memberof K8sIoApiCoreV1HTTPHeader
     */
    value: string;
}

export function K8sIoApiCoreV1HTTPHeaderFromJSON(json: any): K8sIoApiCoreV1HTTPHeader {
    return K8sIoApiCoreV1HTTPHeaderFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1HTTPHeaderFromJSONTyped(json: any, _ignoreDiscriminator: boolean): K8sIoApiCoreV1HTTPHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function K8sIoApiCoreV1HTTPHeaderToJSON(value?: K8sIoApiCoreV1HTTPHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

