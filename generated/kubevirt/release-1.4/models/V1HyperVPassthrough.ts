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
 * 
 * @export
 * @interface V1HyperVPassthrough
 */
export interface V1HyperVPassthrough {
    /**
     * 
     * @type {boolean}
     * @memberof V1HyperVPassthrough
     */
    enabled?: boolean;
}

export function V1HyperVPassthroughFromJSON(json: any): V1HyperVPassthrough {
    return V1HyperVPassthroughFromJSONTyped(json, false);
}

export function V1HyperVPassthroughFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HyperVPassthrough {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function V1HyperVPassthroughToJSON(value?: V1HyperVPassthrough | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}

