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
  IoK8sApiStorageV1CSINodeDriver,
  IoK8sApiStorageV1CSINodeDriverFromJSON,
  IoK8sApiStorageV1CSINodeDriverToJSON,
} from './';

/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 * @export
 * @interface IoK8sApiStorageV1CSINodeSpec
 */
export interface IoK8sApiStorageV1CSINodeSpec {
  /**
   * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
   * @type {Array<IoK8sApiStorageV1CSINodeDriver>}
   * @memberof IoK8sApiStorageV1CSINodeSpec
   */
  drivers: Array<IoK8sApiStorageV1CSINodeDriver>;
}

export function IoK8sApiStorageV1CSINodeSpecFromJSON(json: any): IoK8sApiStorageV1CSINodeSpec {
  return IoK8sApiStorageV1CSINodeSpecFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1CSINodeSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiStorageV1CSINodeSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    drivers: (json['drivers'] as Array<any>).map(IoK8sApiStorageV1CSINodeDriverFromJSON),
  };
}

export function IoK8sApiStorageV1CSINodeSpecToJSON(
  value?: IoK8sApiStorageV1CSINodeSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    drivers: (value.drivers as Array<any>).map(IoK8sApiStorageV1CSINodeDriverToJSON),
  };
}
