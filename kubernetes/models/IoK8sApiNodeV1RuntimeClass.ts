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
  IoK8sApiNodeV1Overhead,
  IoK8sApiNodeV1OverheadFromJSON,
  IoK8sApiNodeV1OverheadToJSON,
  IoK8sApiNodeV1Scheduling,
  IoK8sApiNodeV1SchedulingFromJSON,
  IoK8sApiNodeV1SchedulingToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
 * @export
 * @interface IoK8sApiNodeV1RuntimeClass
 */
export interface IoK8sApiNodeV1RuntimeClass {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiNodeV1RuntimeClass
   */
  apiVersion?: string;
  /**
   * handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
   * @type {string}
   * @memberof IoK8sApiNodeV1RuntimeClass
   */
  handler: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiNodeV1RuntimeClass
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiNodeV1RuntimeClass
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiNodeV1Overhead}
   * @memberof IoK8sApiNodeV1RuntimeClass
   */
  overhead?: IoK8sApiNodeV1Overhead;
  /**
   *
   * @type {IoK8sApiNodeV1Scheduling}
   * @memberof IoK8sApiNodeV1RuntimeClass
   */
  scheduling?: IoK8sApiNodeV1Scheduling;
}

export function IoK8sApiNodeV1RuntimeClassFromJSON(json: any): IoK8sApiNodeV1RuntimeClass {
  return IoK8sApiNodeV1RuntimeClassFromJSONTyped(json, false);
}

export function IoK8sApiNodeV1RuntimeClassFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiNodeV1RuntimeClass {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    handler: json['handler'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    overhead: !exists(json, 'overhead')
      ? undefined
      : IoK8sApiNodeV1OverheadFromJSON(json['overhead']),
    scheduling: !exists(json, 'scheduling')
      ? undefined
      : IoK8sApiNodeV1SchedulingFromJSON(json['scheduling']),
  };
}

export function IoK8sApiNodeV1RuntimeClassToJSON(value?: IoK8sApiNodeV1RuntimeClass | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    handler: value.handler,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    overhead: IoK8sApiNodeV1OverheadToJSON(value.overhead),
    scheduling: IoK8sApiNodeV1SchedulingToJSON(value.scheduling),
  };
}
