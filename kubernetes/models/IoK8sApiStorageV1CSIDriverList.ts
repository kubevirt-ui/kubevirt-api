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
  IoK8sApiStorageV1CSIDriver,
  IoK8sApiStorageV1CSIDriverFromJSON,
  IoK8sApiStorageV1CSIDriverToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * CSIDriverList is a collection of CSIDriver objects.
 * @export
 * @interface IoK8sApiStorageV1CSIDriverList
 */
export interface IoK8sApiStorageV1CSIDriverList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiStorageV1CSIDriverList
   */
  apiVersion?: string;
  /**
   * items is the list of CSIDriver
   * @type {Array<IoK8sApiStorageV1CSIDriver>}
   * @memberof IoK8sApiStorageV1CSIDriverList
   */
  items: Array<IoK8sApiStorageV1CSIDriver>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiStorageV1CSIDriverList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiStorageV1CSIDriverList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiStorageV1CSIDriverListFromJSON(json: any): IoK8sApiStorageV1CSIDriverList {
  return IoK8sApiStorageV1CSIDriverListFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1CSIDriverListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiStorageV1CSIDriverList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(IoK8sApiStorageV1CSIDriverFromJSON),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiStorageV1CSIDriverListToJSON(
  value?: IoK8sApiStorageV1CSIDriverList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(IoK8sApiStorageV1CSIDriverToJSON),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
