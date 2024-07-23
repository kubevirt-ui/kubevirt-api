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
    IoK8sApiAutoscalingV2ContainerResourceMetricStatus,
    IoK8sApiAutoscalingV2ContainerResourceMetricStatusFromJSON,
    IoK8sApiAutoscalingV2ContainerResourceMetricStatusFromJSONTyped,
    IoK8sApiAutoscalingV2ContainerResourceMetricStatusToJSON,
    IoK8sApiAutoscalingV2ExternalMetricStatus,
    IoK8sApiAutoscalingV2ExternalMetricStatusFromJSON,
    IoK8sApiAutoscalingV2ExternalMetricStatusFromJSONTyped,
    IoK8sApiAutoscalingV2ExternalMetricStatusToJSON,
    IoK8sApiAutoscalingV2ObjectMetricStatus,
    IoK8sApiAutoscalingV2ObjectMetricStatusFromJSON,
    IoK8sApiAutoscalingV2ObjectMetricStatusFromJSONTyped,
    IoK8sApiAutoscalingV2ObjectMetricStatusToJSON,
    IoK8sApiAutoscalingV2PodsMetricStatus,
    IoK8sApiAutoscalingV2PodsMetricStatusFromJSON,
    IoK8sApiAutoscalingV2PodsMetricStatusFromJSONTyped,
    IoK8sApiAutoscalingV2PodsMetricStatusToJSON,
    IoK8sApiAutoscalingV2ResourceMetricStatus,
    IoK8sApiAutoscalingV2ResourceMetricStatusFromJSON,
    IoK8sApiAutoscalingV2ResourceMetricStatusFromJSONTyped,
    IoK8sApiAutoscalingV2ResourceMetricStatusToJSON,
} from './';

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface IoK8sApiAutoscalingV2MetricStatus
 */
export interface IoK8sApiAutoscalingV2MetricStatus {
    /**
     * 
     * @type {IoK8sApiAutoscalingV2ContainerResourceMetricStatus}
     * @memberof IoK8sApiAutoscalingV2MetricStatus
     */
    containerResource?: IoK8sApiAutoscalingV2ContainerResourceMetricStatus;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2ExternalMetricStatus}
     * @memberof IoK8sApiAutoscalingV2MetricStatus
     */
    external?: IoK8sApiAutoscalingV2ExternalMetricStatus;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2ObjectMetricStatus}
     * @memberof IoK8sApiAutoscalingV2MetricStatus
     */
    object?: IoK8sApiAutoscalingV2ObjectMetricStatus;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2PodsMetricStatus}
     * @memberof IoK8sApiAutoscalingV2MetricStatus
     */
    pods?: IoK8sApiAutoscalingV2PodsMetricStatus;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2ResourceMetricStatus}
     * @memberof IoK8sApiAutoscalingV2MetricStatus
     */
    resource?: IoK8sApiAutoscalingV2ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2MetricStatus
     */
    type: string;
}

export function IoK8sApiAutoscalingV2MetricStatusFromJSON(json: any): IoK8sApiAutoscalingV2MetricStatus {
    return IoK8sApiAutoscalingV2MetricStatusFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2MetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2MetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerResource': !exists(json, 'containerResource') ? undefined : IoK8sApiAutoscalingV2ContainerResourceMetricStatusFromJSON(json['containerResource']),
        'external': !exists(json, 'external') ? undefined : IoK8sApiAutoscalingV2ExternalMetricStatusFromJSON(json['external']),
        'object': !exists(json, 'object') ? undefined : IoK8sApiAutoscalingV2ObjectMetricStatusFromJSON(json['object']),
        'pods': !exists(json, 'pods') ? undefined : IoK8sApiAutoscalingV2PodsMetricStatusFromJSON(json['pods']),
        'resource': !exists(json, 'resource') ? undefined : IoK8sApiAutoscalingV2ResourceMetricStatusFromJSON(json['resource']),
        'type': json['type'],
    };
}

export function IoK8sApiAutoscalingV2MetricStatusToJSON(value?: IoK8sApiAutoscalingV2MetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerResource': IoK8sApiAutoscalingV2ContainerResourceMetricStatusToJSON(value.containerResource),
        'external': IoK8sApiAutoscalingV2ExternalMetricStatusToJSON(value.external),
        'object': IoK8sApiAutoscalingV2ObjectMetricStatusToJSON(value.object),
        'pods': IoK8sApiAutoscalingV2PodsMetricStatusToJSON(value.pods),
        'resource': IoK8sApiAutoscalingV2ResourceMetricStatusToJSON(value.resource),
        'type': value.type,
    };
}

