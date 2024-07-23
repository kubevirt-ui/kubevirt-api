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
    IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition,
    IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionFromJSON,
    IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionFromJSONTyped,
    IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionToJSON,
    IoK8sApiAutoscalingV2MetricStatus,
    IoK8sApiAutoscalingV2MetricStatusFromJSON,
    IoK8sApiAutoscalingV2MetricStatusFromJSONTyped,
    IoK8sApiAutoscalingV2MetricStatusToJSON,
} from './';

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 * @export
 * @interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
 */
export interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus {
    /**
     * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
     * @type {Array<IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition>}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
     */
    conditions?: Array<IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition>;
    /**
     * currentMetrics is the last read state of the metrics used by this autoscaler.
     * @type {Array<IoK8sApiAutoscalingV2MetricStatus>}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
     */
    currentMetrics?: Array<IoK8sApiAutoscalingV2MetricStatus>;
    /**
     * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
     */
    currentReplicas?: number;
    /**
     * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
     */
    desiredReplicas: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
     */
    lastScaleTime?: string;
    /**
     * observedGeneration is the most recent generation observed by this autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
     */
    observedGeneration?: number;
}

export function IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusFromJSON(json: any): IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus {
    return IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionFromJSON)),
        'currentMetrics': !exists(json, 'currentMetrics') ? undefined : ((json['currentMetrics'] as Array<any>).map(IoK8sApiAutoscalingV2MetricStatusFromJSON)),
        'currentReplicas': !exists(json, 'currentReplicas') ? undefined : json['currentReplicas'],
        'desiredReplicas': json['desiredReplicas'],
        'lastScaleTime': !exists(json, 'lastScaleTime') ? undefined : ((json['lastScaleTime'])),
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
    };
}

export function IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusToJSON(value?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionToJSON)),
        'currentMetrics': value.currentMetrics === undefined ? undefined : ((value.currentMetrics as Array<any>).map(IoK8sApiAutoscalingV2MetricStatusToJSON)),
        'currentReplicas': value.currentReplicas,
        'desiredReplicas': value.desiredReplicas,
        'lastScaleTime': value.lastScaleTime === undefined ? undefined : (value.lastScaleTime),
        'observedGeneration': value.observedGeneration,
    };
}

