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
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement
 */
export interface K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement {
    /**
     * key is the label key that the selector applies to.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement
     */
    key: string;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement
     */
    operator: string;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     * @type {Array<string>}
     * @memberof K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement
     */
    values?: Array<string>;
}

export function K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement {
    return K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSONTyped(json: any, _ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'operator': json['operator'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementToJSON(value?: K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement | null): any {
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

