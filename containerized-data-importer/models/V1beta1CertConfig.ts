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
 * CertConfig contains the tunables for TLS certificates
 * @export
 * @interface V1beta1CertConfig
 */
export interface V1beta1CertConfig {
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1beta1CertConfig
     */
    duration?: string;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1beta1CertConfig
     */
    renewBefore?: string;
}

export function V1beta1CertConfigFromJSON(json: any): V1beta1CertConfig {
    return V1beta1CertConfigFromJSONTyped(json, false);
}

export function V1beta1CertConfigFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1CertConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'renewBefore': !exists(json, 'renewBefore') ? undefined : json['renewBefore'],
    };
}

export function V1beta1CertConfigToJSON(value?: V1beta1CertConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'renewBefore': value.renewBefore,
    };
}

