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
 * @interface V1USBSelector
 */
export interface V1USBSelector {
    /**
     * 
     * @type {string}
     * @memberof V1USBSelector
     */
    product: string;
    /**
     * 
     * @type {string}
     * @memberof V1USBSelector
     */
    vendor: string;
}

export function V1USBSelectorFromJSON(json: any): V1USBSelector {
    return V1USBSelectorFromJSONTyped(json, false);
}

export function V1USBSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1USBSelector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'product': json['product'],
        'vendor': json['vendor'],
    };
}

export function V1USBSelectorToJSON(value?: V1USBSelector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product': value.product,
        'vendor': value.vendor,
    };
}

