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
import {
    V1alpha1VirtualMachine,
    V1alpha1VirtualMachineFromJSON,
    V1alpha1VirtualMachineFromJSONTyped,
    V1alpha1VirtualMachineToJSON,
} from './';

/**
 * SourceSpec contains the appropriate spec for the resource being snapshotted
 * @export
 * @interface V1alpha1SourceSpec
 */
export interface V1alpha1SourceSpec {
    /**
     * 
     * @type {V1alpha1VirtualMachine}
     * @memberof V1alpha1SourceSpec
     */
    virtualMachine?: V1alpha1VirtualMachine;
}

export function V1alpha1SourceSpecFromJSON(json: any): V1alpha1SourceSpec {
    return V1alpha1SourceSpecFromJSONTyped(json, false);
}

export function V1alpha1SourceSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1SourceSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'virtualMachine': !exists(json, 'virtualMachine') ? undefined : V1alpha1VirtualMachineFromJSON(json['virtualMachine']),
    };
}

export function V1alpha1SourceSpecToJSON(value?: V1alpha1SourceSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'virtualMachine': V1alpha1VirtualMachineToJSON(value.virtualMachine),
    };
}

