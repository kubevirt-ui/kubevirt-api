/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    IoK8sApiCoreV1EnvVarSource,
    IoK8sApiCoreV1EnvVarSourceFromJSON,
    IoK8sApiCoreV1EnvVarSourceFromJSONTyped,
    IoK8sApiCoreV1EnvVarSourceToJSON,
} from './';

/**
 * EnvVar represents an environment variable present in a Container.
 * @export
 * @interface IoK8sApiCoreV1EnvVar
 */
export interface IoK8sApiCoreV1EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     * @type {string}
     * @memberof IoK8sApiCoreV1EnvVar
     */
    name: string;
    /**
     * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
     * @type {string}
     * @memberof IoK8sApiCoreV1EnvVar
     */
    value?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1EnvVarSource}
     * @memberof IoK8sApiCoreV1EnvVar
     */
    valueFrom?: IoK8sApiCoreV1EnvVarSource;
}

export function IoK8sApiCoreV1EnvVarFromJSON(json: any): IoK8sApiCoreV1EnvVar {
    return IoK8sApiCoreV1EnvVarFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EnvVarFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1EnvVar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'valueFrom': !exists(json, 'valueFrom') ? undefined : IoK8sApiCoreV1EnvVarSourceFromJSON(json['valueFrom']),
    };
}

export function IoK8sApiCoreV1EnvVarToJSON(value?: IoK8sApiCoreV1EnvVar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'valueFrom': IoK8sApiCoreV1EnvVarSourceToJSON(value.valueFrom),
    };
}

