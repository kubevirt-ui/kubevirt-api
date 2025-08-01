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
    V1ArchSpecificConfiguration,
    V1ArchSpecificConfigurationFromJSON,
    V1ArchSpecificConfigurationFromJSONTyped,
    V1ArchSpecificConfigurationToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1ArchConfiguration
 */
export interface V1ArchConfiguration {
    /**
     * 
     * @type {V1ArchSpecificConfiguration}
     * @memberof V1ArchConfiguration
     */
    amd64?: V1ArchSpecificConfiguration;
    /**
     * 
     * @type {V1ArchSpecificConfiguration}
     * @memberof V1ArchConfiguration
     */
    arm64?: V1ArchSpecificConfiguration;
    /**
     * 
     * @type {string}
     * @memberof V1ArchConfiguration
     */
    defaultArchitecture?: string;
    /**
     * 
     * @type {V1ArchSpecificConfiguration}
     * @memberof V1ArchConfiguration
     */
    ppc64le?: V1ArchSpecificConfiguration;
    /**
     * 
     * @type {V1ArchSpecificConfiguration}
     * @memberof V1ArchConfiguration
     */
    s390x?: V1ArchSpecificConfiguration;
}

export function V1ArchConfigurationFromJSON(json: any): V1ArchConfiguration {
    return V1ArchConfigurationFromJSONTyped(json, false);
}

export function V1ArchConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ArchConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amd64': !exists(json, 'amd64') ? undefined : V1ArchSpecificConfigurationFromJSON(json['amd64']),
        'arm64': !exists(json, 'arm64') ? undefined : V1ArchSpecificConfigurationFromJSON(json['arm64']),
        'defaultArchitecture': !exists(json, 'defaultArchitecture') ? undefined : json['defaultArchitecture'],
        'ppc64le': !exists(json, 'ppc64le') ? undefined : V1ArchSpecificConfigurationFromJSON(json['ppc64le']),
        's390x': !exists(json, 's390x') ? undefined : V1ArchSpecificConfigurationFromJSON(json['s390x']),
    };
}

export function V1ArchConfigurationToJSON(value?: V1ArchConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amd64': V1ArchSpecificConfigurationToJSON(value.amd64),
        'arm64': V1ArchSpecificConfigurationToJSON(value.arm64),
        'defaultArchitecture': value.defaultArchitecture,
        'ppc64le': V1ArchSpecificConfigurationToJSON(value.ppc64le),
        's390x': V1ArchSpecificConfigurationToJSON(value.s390x),
    };
}

