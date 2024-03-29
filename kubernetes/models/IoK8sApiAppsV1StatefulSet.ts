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
  IoK8sApiAppsV1StatefulSetSpec,
  IoK8sApiAppsV1StatefulSetSpecFromJSON,
  IoK8sApiAppsV1StatefulSetSpecToJSON,
  IoK8sApiAppsV1StatefulSetStatus,
  IoK8sApiAppsV1StatefulSetStatusFromJSON,
  IoK8sApiAppsV1StatefulSetStatusToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *   - Network: A single stable DNS and hostname.
 *   - Storage: As many VolumeClaims as requested.
 *
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 * @export
 * @interface IoK8sApiAppsV1StatefulSet
 */
export interface IoK8sApiAppsV1StatefulSet {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiAppsV1StatefulSet
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAppsV1StatefulSet
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiAppsV1StatefulSet
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiAppsV1StatefulSetSpec}
   * @memberof IoK8sApiAppsV1StatefulSet
   */
  spec?: IoK8sApiAppsV1StatefulSetSpec;
  /**
   *
   * @type {IoK8sApiAppsV1StatefulSetStatus}
   * @memberof IoK8sApiAppsV1StatefulSet
   */
  status?: IoK8sApiAppsV1StatefulSetStatus;
}

export function IoK8sApiAppsV1StatefulSetFromJSON(json: any): IoK8sApiAppsV1StatefulSet {
  return IoK8sApiAppsV1StatefulSetFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1StatefulSetFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAppsV1StatefulSet {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: !exists(json, 'spec') ? undefined : IoK8sApiAppsV1StatefulSetSpecFromJSON(json['spec']),
    status: !exists(json, 'status')
      ? undefined
      : IoK8sApiAppsV1StatefulSetStatusFromJSON(json['status']),
  };
}

export function IoK8sApiAppsV1StatefulSetToJSON(value?: IoK8sApiAppsV1StatefulSet | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: IoK8sApiAppsV1StatefulSetSpecToJSON(value.spec),
    status: IoK8sApiAppsV1StatefulSetStatusToJSON(value.status),
  };
}
