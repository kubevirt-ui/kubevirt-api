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
  IoK8sApiCoreV1ContainerStateRunning,
  IoK8sApiCoreV1ContainerStateRunningFromJSON,
  IoK8sApiCoreV1ContainerStateRunningToJSON,
  IoK8sApiCoreV1ContainerStateTerminated,
  IoK8sApiCoreV1ContainerStateTerminatedFromJSON,
  IoK8sApiCoreV1ContainerStateTerminatedToJSON,
  IoK8sApiCoreV1ContainerStateWaiting,
  IoK8sApiCoreV1ContainerStateWaitingFromJSON,
  IoK8sApiCoreV1ContainerStateWaitingToJSON,
} from './';

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 * @export
 * @interface IoK8sApiCoreV1ContainerState
 */
export interface IoK8sApiCoreV1ContainerState {
  /**
   *
   * @type {IoK8sApiCoreV1ContainerStateRunning}
   * @memberof IoK8sApiCoreV1ContainerState
   */
  running?: IoK8sApiCoreV1ContainerStateRunning;
  /**
   *
   * @type {IoK8sApiCoreV1ContainerStateTerminated}
   * @memberof IoK8sApiCoreV1ContainerState
   */
  terminated?: IoK8sApiCoreV1ContainerStateTerminated;
  /**
   *
   * @type {IoK8sApiCoreV1ContainerStateWaiting}
   * @memberof IoK8sApiCoreV1ContainerState
   */
  waiting?: IoK8sApiCoreV1ContainerStateWaiting;
}

export function IoK8sApiCoreV1ContainerStateFromJSON(json: any): IoK8sApiCoreV1ContainerState {
  return IoK8sApiCoreV1ContainerStateFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerStateFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1ContainerState {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    running: !exists(json, 'running')
      ? undefined
      : IoK8sApiCoreV1ContainerStateRunningFromJSON(json['running']),
    terminated: !exists(json, 'terminated')
      ? undefined
      : IoK8sApiCoreV1ContainerStateTerminatedFromJSON(json['terminated']),
    waiting: !exists(json, 'waiting')
      ? undefined
      : IoK8sApiCoreV1ContainerStateWaitingFromJSON(json['waiting']),
  };
}

export function IoK8sApiCoreV1ContainerStateToJSON(
  value?: IoK8sApiCoreV1ContainerState | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    running: IoK8sApiCoreV1ContainerStateRunningToJSON(value.running),
    terminated: IoK8sApiCoreV1ContainerStateTerminatedToJSON(value.terminated),
    waiting: IoK8sApiCoreV1ContainerStateWaitingToJSON(value.waiting),
  };
}
