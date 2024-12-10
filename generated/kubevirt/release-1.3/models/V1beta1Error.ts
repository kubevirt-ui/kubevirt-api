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
 * Error is the last error encountered during the snapshot/restore
 * @export
 * @interface V1beta1Error
 */
export interface V1beta1Error {
    /**
     * 
     * @type {string}
     * @memberof V1beta1Error
     */
    message?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1beta1Error
     */
    time?: string;
}

export function V1beta1ErrorFromJSON(json: any): V1beta1Error {
    return V1beta1ErrorFromJSONTyped(json, false);
}

export function V1beta1ErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1Error {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'time': !exists(json, 'time') ? undefined : (new Date(json['time'])),
    };
}

export function V1beta1ErrorToJSON(value?: V1beta1Error | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'time': value.time === undefined ? undefined : (value.time.toISOString()),
    };
}
