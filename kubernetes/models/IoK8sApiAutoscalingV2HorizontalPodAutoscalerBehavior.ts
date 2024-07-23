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
    IoK8sApiAutoscalingV2HPAScalingRules,
    IoK8sApiAutoscalingV2HPAScalingRulesFromJSON,
    IoK8sApiAutoscalingV2HPAScalingRulesFromJSONTyped,
    IoK8sApiAutoscalingV2HPAScalingRulesToJSON,
} from './';

/**
 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
 * @export
 * @interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior
 */
export interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior {
    /**
     * 
     * @type {IoK8sApiAutoscalingV2HPAScalingRules}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior
     */
    scaleDown?: IoK8sApiAutoscalingV2HPAScalingRules;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2HPAScalingRules}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior
     */
    scaleUp?: IoK8sApiAutoscalingV2HPAScalingRules;
}

export function IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorFromJSON(json: any): IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior {
    return IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scaleDown': !exists(json, 'scaleDown') ? undefined : IoK8sApiAutoscalingV2HPAScalingRulesFromJSON(json['scaleDown']),
        'scaleUp': !exists(json, 'scaleUp') ? undefined : IoK8sApiAutoscalingV2HPAScalingRulesFromJSON(json['scaleUp']),
    };
}

export function IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorToJSON(value?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scaleDown': IoK8sApiAutoscalingV2HPAScalingRulesToJSON(value.scaleDown),
        'scaleUp': IoK8sApiAutoscalingV2HPAScalingRulesToJSON(value.scaleUp),
    };
}

