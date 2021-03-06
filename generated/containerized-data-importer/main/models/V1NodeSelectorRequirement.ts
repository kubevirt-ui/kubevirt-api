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
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 * @export
 * @interface V1NodeSelectorRequirement
 */
export interface V1NodeSelectorRequirement {
    /**
     * The label key that the selector applies to.
     * @type {string}
     * @memberof V1NodeSelectorRequirement
     */
    key: string;
    /**
     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
     * 
     * Possible enum values:
     *  - `"DoesNotExist"`
     *  - `"Exists"`
     *  - `"Gt"`
     *  - `"In"`
     *  - `"Lt"`
     *  - `"NotIn"`
     * @type {string}
     * @memberof V1NodeSelectorRequirement
     */
    operator: V1NodeSelectorRequirementOperatorEnum;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
     * @type {Array<string>}
     * @memberof V1NodeSelectorRequirement
     */
    values?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum V1NodeSelectorRequirementOperatorEnum {
    DoesNotExist = 'DoesNotExist',
    Exists = 'Exists',
    Gt = 'Gt',
    In = 'In',
    Lt = 'Lt',
    NotIn = 'NotIn'
}

export function V1NodeSelectorRequirementFromJSON(json: any): V1NodeSelectorRequirement {
    return V1NodeSelectorRequirementFromJSONTyped(json, false);
}

export function V1NodeSelectorRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeSelectorRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'operator': json['operator'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function V1NodeSelectorRequirementToJSON(value?: V1NodeSelectorRequirement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'operator': value.operator,
        'values': value.values,
    };
}

