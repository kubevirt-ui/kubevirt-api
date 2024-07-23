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

import { exists } from '../runtime';
import {
  IoK8sApiAutoscalingV2ContainerResourceMetricSource,
  IoK8sApiAutoscalingV2ContainerResourceMetricSourceFromJSON,
  IoK8sApiAutoscalingV2ContainerResourceMetricSourceToJSON,
  IoK8sApiAutoscalingV2ExternalMetricSource,
  IoK8sApiAutoscalingV2ExternalMetricSourceFromJSON,
  IoK8sApiAutoscalingV2ExternalMetricSourceToJSON,
  IoK8sApiAutoscalingV2ObjectMetricSource,
  IoK8sApiAutoscalingV2ObjectMetricSourceFromJSON,
  IoK8sApiAutoscalingV2ObjectMetricSourceToJSON,
  IoK8sApiAutoscalingV2PodsMetricSource,
  IoK8sApiAutoscalingV2PodsMetricSourceFromJSON,
  IoK8sApiAutoscalingV2PodsMetricSourceToJSON,
  IoK8sApiAutoscalingV2ResourceMetricSource,
  IoK8sApiAutoscalingV2ResourceMetricSourceFromJSON,
  IoK8sApiAutoscalingV2ResourceMetricSourceToJSON,
} from './';

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 * @export
 * @interface IoK8sApiAutoscalingV2MetricSpec
 */
export interface IoK8sApiAutoscalingV2MetricSpec {
  /**
   *
   * @type {IoK8sApiAutoscalingV2ContainerResourceMetricSource}
   * @memberof IoK8sApiAutoscalingV2MetricSpec
   */
  containerResource?: IoK8sApiAutoscalingV2ContainerResourceMetricSource;
  /**
   *
   * @type {IoK8sApiAutoscalingV2ExternalMetricSource}
   * @memberof IoK8sApiAutoscalingV2MetricSpec
   */
  external?: IoK8sApiAutoscalingV2ExternalMetricSource;
  /**
   *
   * @type {IoK8sApiAutoscalingV2ObjectMetricSource}
   * @memberof IoK8sApiAutoscalingV2MetricSpec
   */
  object?: IoK8sApiAutoscalingV2ObjectMetricSource;
  /**
   *
   * @type {IoK8sApiAutoscalingV2PodsMetricSource}
   * @memberof IoK8sApiAutoscalingV2MetricSpec
   */
  pods?: IoK8sApiAutoscalingV2PodsMetricSource;
  /**
   *
   * @type {IoK8sApiAutoscalingV2ResourceMetricSource}
   * @memberof IoK8sApiAutoscalingV2MetricSpec
   */
  resource?: IoK8sApiAutoscalingV2ResourceMetricSource;
  /**
   * type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
   * @type {string}
   * @memberof IoK8sApiAutoscalingV2MetricSpec
   */
  type: string;
}

export function IoK8sApiAutoscalingV2MetricSpecFromJSON(
  json: any,
): IoK8sApiAutoscalingV2MetricSpec {
  return IoK8sApiAutoscalingV2MetricSpecFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2MetricSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAutoscalingV2MetricSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    containerResource: !exists(json, 'containerResource')
      ? undefined
      : IoK8sApiAutoscalingV2ContainerResourceMetricSourceFromJSON(json['containerResource']),
    external: !exists(json, 'external')
      ? undefined
      : IoK8sApiAutoscalingV2ExternalMetricSourceFromJSON(json['external']),
    object: !exists(json, 'object')
      ? undefined
      : IoK8sApiAutoscalingV2ObjectMetricSourceFromJSON(json['object']),
    pods: !exists(json, 'pods')
      ? undefined
      : IoK8sApiAutoscalingV2PodsMetricSourceFromJSON(json['pods']),
    resource: !exists(json, 'resource')
      ? undefined
      : IoK8sApiAutoscalingV2ResourceMetricSourceFromJSON(json['resource']),
    type: json['type'],
  };
}

export function IoK8sApiAutoscalingV2MetricSpecToJSON(
  value?: IoK8sApiAutoscalingV2MetricSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    containerResource: IoK8sApiAutoscalingV2ContainerResourceMetricSourceToJSON(
      value.containerResource,
    ),
    external: IoK8sApiAutoscalingV2ExternalMetricSourceToJSON(value.external),
    object: IoK8sApiAutoscalingV2ObjectMetricSourceToJSON(value.object),
    pods: IoK8sApiAutoscalingV2PodsMetricSourceToJSON(value.pods),
    resource: IoK8sApiAutoscalingV2ResourceMetricSourceToJSON(value.resource),
    type: value.type,
  };
}
