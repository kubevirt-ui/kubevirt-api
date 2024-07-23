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
 * UserSubject holds detailed information for user-kind subject.
 * @export
 * @interface IoK8sApiFlowcontrolV1UserSubject
 */
export interface IoK8sApiFlowcontrolV1UserSubject {
    /**
     * `name` is the username that matches, or "*" to match all usernames. Required.
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1UserSubject
     */
    name: string;
}

export function IoK8sApiFlowcontrolV1UserSubjectFromJSON(json: any): IoK8sApiFlowcontrolV1UserSubject {
    return IoK8sApiFlowcontrolV1UserSubjectFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1UserSubjectFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1UserSubject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function IoK8sApiFlowcontrolV1UserSubjectToJSON(value?: IoK8sApiFlowcontrolV1UserSubject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

