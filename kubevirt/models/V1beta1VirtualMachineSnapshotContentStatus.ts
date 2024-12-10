/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  V1beta1Error,
  V1beta1ErrorFromJSON,
  V1beta1ErrorToJSON,
  V1beta1VolumeSnapshotStatus,
  V1beta1VolumeSnapshotStatusFromJSON,
  V1beta1VolumeSnapshotStatusToJSON,
} from './';

/**
 * VirtualMachineSnapshotContentStatus is the status for a VirtualMachineSnapshotStatus resource
 * @export
 * @interface V1beta1VirtualMachineSnapshotContentStatus
 */
export interface V1beta1VirtualMachineSnapshotContentStatus {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1beta1VirtualMachineSnapshotContentStatus
   */
  creationTime?: string;
  /**
   *
   * @type {V1beta1Error}
   * @memberof V1beta1VirtualMachineSnapshotContentStatus
   */
  error?: V1beta1Error;
  /**
   *
   * @type {boolean}
   * @memberof V1beta1VirtualMachineSnapshotContentStatus
   */
  readyToUse?: boolean;
  /**
   *
   * @type {Array<V1beta1VolumeSnapshotStatus>}
   * @memberof V1beta1VirtualMachineSnapshotContentStatus
   */
  volumeSnapshotStatus?: Array<V1beta1VolumeSnapshotStatus>;
}

export function V1beta1VirtualMachineSnapshotContentStatusFromJSON(
  json: any,
): V1beta1VirtualMachineSnapshotContentStatus {
  return V1beta1VirtualMachineSnapshotContentStatusFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotContentStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1VirtualMachineSnapshotContentStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    creationTime: !exists(json, 'creationTime') ? undefined : json['creationTime'],
    error: !exists(json, 'error') ? undefined : V1beta1ErrorFromJSON(json['error']),
    readyToUse: !exists(json, 'readyToUse') ? undefined : json['readyToUse'],
    volumeSnapshotStatus: !exists(json, 'volumeSnapshotStatus')
      ? undefined
      : (json['volumeSnapshotStatus'] as Array<any>).map(V1beta1VolumeSnapshotStatusFromJSON),
  };
}

export function V1beta1VirtualMachineSnapshotContentStatusToJSON(
  value?: V1beta1VirtualMachineSnapshotContentStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    creationTime: value.creationTime === undefined ? undefined : value.creationTime,
    error: V1beta1ErrorToJSON(value.error),
    readyToUse: value.readyToUse,
    volumeSnapshotStatus:
      value.volumeSnapshotStatus === undefined
        ? undefined
        : (value.volumeSnapshotStatus as Array<any>).map(V1beta1VolumeSnapshotStatusToJSON),
  };
}