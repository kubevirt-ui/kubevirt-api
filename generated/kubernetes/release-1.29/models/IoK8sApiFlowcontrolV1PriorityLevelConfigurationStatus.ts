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
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationConditionFromJSON,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationConditionFromJSONTyped,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationConditionToJSON,
} from './';

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 * @export
 * @interface IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus
 */
export interface IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus {
    /**
     * `conditions` is the current state of "request-priority".
     * @type {Array<IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition>}
     * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus
     */
    conditions?: Array<IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition>;
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusFromJSON(json: any): IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus {
    return IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiFlowcontrolV1PriorityLevelConfigurationConditionFromJSON)),
    };
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusToJSON(value?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiFlowcontrolV1PriorityLevelConfigurationConditionToJSON)),
    };
}

