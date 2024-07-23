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
  IoK8sApiFlowcontrolV1PriorityLevelConfiguration,
  IoK8sApiFlowcontrolV1PriorityLevelConfigurationFromJSON,
  IoK8sApiFlowcontrolV1PriorityLevelConfigurationToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 * @export
 * @interface IoK8sApiFlowcontrolV1PriorityLevelConfigurationList
 */
export interface IoK8sApiFlowcontrolV1PriorityLevelConfigurationList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfigurationList
   */
  apiVersion?: string;
  /**
   * `items` is a list of request-priorities.
   * @type {Array<IoK8sApiFlowcontrolV1PriorityLevelConfiguration>}
   * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfigurationList
   */
  items: Array<IoK8sApiFlowcontrolV1PriorityLevelConfiguration>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfigurationList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfigurationList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationListFromJSON(
  json: any,
): IoK8sApiFlowcontrolV1PriorityLevelConfigurationList {
  return IoK8sApiFlowcontrolV1PriorityLevelConfigurationListFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiFlowcontrolV1PriorityLevelConfigurationList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(
      IoK8sApiFlowcontrolV1PriorityLevelConfigurationFromJSON,
    ),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationListToJSON(
  value?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(IoK8sApiFlowcontrolV1PriorityLevelConfigurationToJSON),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
