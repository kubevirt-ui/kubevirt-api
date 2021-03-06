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
 * FlavorMatcher references a flavor that is used to fill fields in the VMI template.
 * @export
 * @interface V1FlavorMatcher
 */
export interface V1FlavorMatcher {
    /**
     * Kind specifies which flavor resource is referenced. Allowed values are: "VirtualMachineFlavor" and "VirtualMachineClusterFlavor". If not specified, "VirtualMachineClusterFlavor" is used by default.
     * @type {string}
     * @memberof V1FlavorMatcher
     */
    kind?: string;
    /**
     * Name is the name of the VirtualMachineFlavor or VirtualMachineClusterFlavor
     * @type {string}
     * @memberof V1FlavorMatcher
     */
    name: string;
    /**
     * Profile is the name of a custom profile in the flavor. If left empty, the default profile is used.
     * @type {string}
     * @memberof V1FlavorMatcher
     */
    profile?: string;
}

export function V1FlavorMatcherFromJSON(json: any): V1FlavorMatcher {
    return V1FlavorMatcherFromJSONTyped(json, false);
}

export function V1FlavorMatcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FlavorMatcher {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': json['name'],
        'profile': !exists(json, 'profile') ? undefined : json['profile'],
    };
}

export function V1FlavorMatcherToJSON(value?: V1FlavorMatcher | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'name': value.name,
        'profile': value.profile,
    };
}

