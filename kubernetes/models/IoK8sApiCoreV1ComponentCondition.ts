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
/**
 * Information about the condition of a component.
 * @export
 * @interface IoK8sApiCoreV1ComponentCondition
 */
export interface IoK8sApiCoreV1ComponentCondition {
    /**
     * Condition error code for a component. For example, a health check error code.
     * @type {string}
     * @memberof IoK8sApiCoreV1ComponentCondition
     */
    error?: string;
    /**
     * Message about the condition for a component. For example, information about a health check.
     * @type {string}
     * @memberof IoK8sApiCoreV1ComponentCondition
     */
    message?: string;
    /**
     * Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
     * @type {string}
     * @memberof IoK8sApiCoreV1ComponentCondition
     */
    status: string;
    /**
     * Type of condition for a component. Valid value: "Healthy"
     * @type {string}
     * @memberof IoK8sApiCoreV1ComponentCondition
     */
    type: string;
}

export function IoK8sApiCoreV1ComponentConditionFromJSON(json: any): IoK8sApiCoreV1ComponentCondition {
    return IoK8sApiCoreV1ComponentConditionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ComponentConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ComponentCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1ComponentConditionToJSON(value?: IoK8sApiCoreV1ComponentCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'message': value.message,
        'status': value.status,
        'type': value.type,
    };
}

