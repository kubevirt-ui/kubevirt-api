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
 * CustomizeComponentsPatch defines a patch for some resource.
 * @export
 * @interface V1beta1CustomizeComponentsPatch
 */
export interface V1beta1CustomizeComponentsPatch {
    /**
     * 
     * @type {string}
     * @memberof V1beta1CustomizeComponentsPatch
     */
    patch: string;
    /**
     * 
     * @type {string}
     * @memberof V1beta1CustomizeComponentsPatch
     */
    resourceName: string;
    /**
     * 
     * @type {string}
     * @memberof V1beta1CustomizeComponentsPatch
     */
    resourceType: string;
    /**
     * 
     * @type {string}
     * @memberof V1beta1CustomizeComponentsPatch
     */
    type: string;
}

export function V1beta1CustomizeComponentsPatchFromJSON(json: any): V1beta1CustomizeComponentsPatch {
    return V1beta1CustomizeComponentsPatchFromJSONTyped(json, false);
}

export function V1beta1CustomizeComponentsPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1CustomizeComponentsPatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'patch': json['patch'],
        'resourceName': json['resourceName'],
        'resourceType': json['resourceType'],
        'type': json['type'],
    };
}

export function V1beta1CustomizeComponentsPatchToJSON(value?: V1beta1CustomizeComponentsPatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'patch': value.patch,
        'resourceName': value.resourceName,
        'resourceType': value.resourceType,
        'type': value.type,
    };
}

