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
  IoK8sApiNodeV1alpha1Overhead,
  IoK8sApiNodeV1alpha1OverheadFromJSON,
  IoK8sApiNodeV1alpha1OverheadToJSON,
  IoK8sApiNodeV1alpha1Scheduling,
  IoK8sApiNodeV1alpha1SchedulingFromJSON,
  IoK8sApiNodeV1alpha1SchedulingToJSON,
} from './';

/**
 * RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable.
 * @export
 * @interface IoK8sApiNodeV1alpha1RuntimeClassSpec
 */
export interface IoK8sApiNodeV1alpha1RuntimeClassSpec {
  /**
   *
   * @type {IoK8sApiNodeV1alpha1Overhead}
   * @memberof IoK8sApiNodeV1alpha1RuntimeClassSpec
   */
  overhead?: IoK8sApiNodeV1alpha1Overhead;
  /**
   * RuntimeHandler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The RuntimeHandler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
   * @type {string}
   * @memberof IoK8sApiNodeV1alpha1RuntimeClassSpec
   */
  runtimeHandler: string;
  /**
   *
   * @type {IoK8sApiNodeV1alpha1Scheduling}
   * @memberof IoK8sApiNodeV1alpha1RuntimeClassSpec
   */
  scheduling?: IoK8sApiNodeV1alpha1Scheduling;
}

export function IoK8sApiNodeV1alpha1RuntimeClassSpecFromJSON(
  json: any,
): IoK8sApiNodeV1alpha1RuntimeClassSpec {
  return IoK8sApiNodeV1alpha1RuntimeClassSpecFromJSONTyped(json, false);
}

export function IoK8sApiNodeV1alpha1RuntimeClassSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiNodeV1alpha1RuntimeClassSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    overhead: !exists(json, 'overhead')
      ? undefined
      : IoK8sApiNodeV1alpha1OverheadFromJSON(json['overhead']),
    runtimeHandler: json['runtimeHandler'],
    scheduling: !exists(json, 'scheduling')
      ? undefined
      : IoK8sApiNodeV1alpha1SchedulingFromJSON(json['scheduling']),
  };
}

export function IoK8sApiNodeV1alpha1RuntimeClassSpecToJSON(
  value?: IoK8sApiNodeV1alpha1RuntimeClassSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    overhead: IoK8sApiNodeV1alpha1OverheadToJSON(value.overhead),
    runtimeHandler: value.runtimeHandler,
    scheduling: IoK8sApiNodeV1alpha1SchedulingToJSON(value.scheduling),
  };
}