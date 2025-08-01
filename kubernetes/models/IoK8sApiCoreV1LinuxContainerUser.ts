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
/**
 * LinuxContainerUser represents user identity information in Linux containers
 * @export
 * @interface IoK8sApiCoreV1LinuxContainerUser
 */
export interface IoK8sApiCoreV1LinuxContainerUser {
  /**
   * GID is the primary gid initially attached to the first process in the container
   * @type {number}
   * @memberof IoK8sApiCoreV1LinuxContainerUser
   */
  gid: number;
  /**
   * SupplementalGroups are the supplemental groups initially attached to the first process in the container
   * @type {Array<number>}
   * @memberof IoK8sApiCoreV1LinuxContainerUser
   */
  supplementalGroups?: Array<number>;
  /**
   * UID is the primary uid initially attached to the first process in the container
   * @type {number}
   * @memberof IoK8sApiCoreV1LinuxContainerUser
   */
  uid: number;
}

export function IoK8sApiCoreV1LinuxContainerUserFromJSON(
  json: any,
): IoK8sApiCoreV1LinuxContainerUser {
  return IoK8sApiCoreV1LinuxContainerUserFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LinuxContainerUserFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1LinuxContainerUser {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    gid: json['gid'],
    supplementalGroups: !exists(json, 'supplementalGroups')
      ? undefined
      : json['supplementalGroups'],
    uid: json['uid'],
  };
}

export function IoK8sApiCoreV1LinuxContainerUserToJSON(
  value?: IoK8sApiCoreV1LinuxContainerUser | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    gid: value.gid,
    supplementalGroups: value.supplementalGroups,
    uid: value.uid,
  };
}
