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
    V1CertConfig,
    V1CertConfigFromJSON,
    V1CertConfigFromJSONTyped,
    V1CertConfigToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1KubeVirtSelfSignConfiguration
 */
export interface V1KubeVirtSelfSignConfiguration {
    /**
     * 
     * @type {V1CertConfig}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    ca?: V1CertConfig;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    caOverlapInterval?: string;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    caRotateInterval?: string;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    certRotateInterval?: string;
    /**
     * 
     * @type {V1CertConfig}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    server?: V1CertConfig;
}

export function V1KubeVirtSelfSignConfigurationFromJSON(json: any): V1KubeVirtSelfSignConfiguration {
    return V1KubeVirtSelfSignConfigurationFromJSONTyped(json, false);
}

export function V1KubeVirtSelfSignConfigurationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KubeVirtSelfSignConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ca': !exists(json, 'ca') ? undefined : V1CertConfigFromJSON(json['ca']),
        'caOverlapInterval': !exists(json, 'caOverlapInterval') ? undefined : json['caOverlapInterval'],
        'caRotateInterval': !exists(json, 'caRotateInterval') ? undefined : json['caRotateInterval'],
        'certRotateInterval': !exists(json, 'certRotateInterval') ? undefined : json['certRotateInterval'],
        'server': !exists(json, 'server') ? undefined : V1CertConfigFromJSON(json['server']),
    };
}

export function V1KubeVirtSelfSignConfigurationToJSON(value?: V1KubeVirtSelfSignConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ca': V1CertConfigToJSON(value.ca),
        'caOverlapInterval': value.caOverlapInterval,
        'caRotateInterval': value.caRotateInterval,
        'certRotateInterval': value.certRotateInterval,
        'server': V1CertConfigToJSON(value.server),
    };
}

