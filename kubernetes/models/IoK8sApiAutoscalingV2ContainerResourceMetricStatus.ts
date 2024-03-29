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

import {
  IoK8sApiAutoscalingV2MetricValueStatus,
  IoK8sApiAutoscalingV2MetricValueStatusFromJSON,
  IoK8sApiAutoscalingV2MetricValueStatusToJSON,
} from './';

/**
 * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface IoK8sApiAutoscalingV2ContainerResourceMetricStatus
 */
export interface IoK8sApiAutoscalingV2ContainerResourceMetricStatus {
  /**
   * container is the name of the container in the pods of the scaling target
   * @type {string}
   * @memberof IoK8sApiAutoscalingV2ContainerResourceMetricStatus
   */
  container: string;
  /**
   *
   * @type {IoK8sApiAutoscalingV2MetricValueStatus}
   * @memberof IoK8sApiAutoscalingV2ContainerResourceMetricStatus
   */
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  /**
   * name is the name of the resource in question.
   * @type {string}
   * @memberof IoK8sApiAutoscalingV2ContainerResourceMetricStatus
   */
  name: string;
}

export function IoK8sApiAutoscalingV2ContainerResourceMetricStatusFromJSON(
  json: any,
): IoK8sApiAutoscalingV2ContainerResourceMetricStatus {
  return IoK8sApiAutoscalingV2ContainerResourceMetricStatusFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2ContainerResourceMetricStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAutoscalingV2ContainerResourceMetricStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    container: json['container'],
    current: IoK8sApiAutoscalingV2MetricValueStatusFromJSON(json['current']),
    name: json['name'],
  };
}

export function IoK8sApiAutoscalingV2ContainerResourceMetricStatusToJSON(
  value?: IoK8sApiAutoscalingV2ContainerResourceMetricStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    container: value.container,
    current: IoK8sApiAutoscalingV2MetricValueStatusToJSON(value.current),
    name: value.name,
  };
}
