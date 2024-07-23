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
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 * @export
 * @interface V1ResourceClaim
 */
export interface V1ResourceClaim {
    /**
     * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
     * @type {string}
     * @memberof V1ResourceClaim
     */
    name: string;
}

export function V1ResourceClaimFromJSON(json: any): V1ResourceClaim {
    return V1ResourceClaimFromJSONTyped(json, false);
}

export function V1ResourceClaimFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1ResourceClaim {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1ResourceClaimToJSON(value?: V1ResourceClaim | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

