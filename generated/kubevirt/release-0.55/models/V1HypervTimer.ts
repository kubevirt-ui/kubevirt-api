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
 * @interface V1HypervTimer
 */
export interface V1HypervTimer {
    /**
     * Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true.
     * @type {boolean}
     * @memberof V1HypervTimer
     */
    present?: boolean;
}

export function V1HypervTimerFromJSON(json: any): V1HypervTimer {
    return V1HypervTimerFromJSONTyped(json, false);
}

export function V1HypervTimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HypervTimer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'present': !exists(json, 'present') ? undefined : json['present'],
    };
}

export function V1HypervTimerToJSON(value?: V1HypervTimer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'present': value.present,
    };
}

