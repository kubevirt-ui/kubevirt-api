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
  V1alpha1Condition,
  V1alpha1ConditionFromJSON,
  V1alpha1ConditionToJSON,
  V1alpha1Error,
  V1alpha1ErrorFromJSON,
  V1alpha1ErrorToJSON,
  V1alpha1SnapshotVolumesLists,
  V1alpha1SnapshotVolumesListsFromJSON,
  V1alpha1SnapshotVolumesListsToJSON,
} from './';

/**
 * VirtualMachineSnapshotStatus is the status for a VirtualMachineSnapshot resource
 * @export
 * @interface V1alpha1VirtualMachineSnapshotStatus
 */
export interface V1alpha1VirtualMachineSnapshotStatus {
  /**
   *
   * @type {Array<V1alpha1Condition>}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  conditions?: Array<V1alpha1Condition>;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  creationTime?: string;
  /**
   *
   * @type {V1alpha1Error}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  error?: V1alpha1Error;
  /**
   *
   * @type {Array<string>}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  indications?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  phase?: string;
  /**
   *
   * @type {boolean}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  readyToUse?: boolean;
  /**
   *
   * @type {V1alpha1SnapshotVolumesLists}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  snapshotVolumes?: V1alpha1SnapshotVolumesLists;
  /**
   *
   * @type {string}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  sourceUID?: string;
  /**
   *
   * @type {string}
   * @memberof V1alpha1VirtualMachineSnapshotStatus
   */
  virtualMachineSnapshotContentName?: string;
}

export function V1alpha1VirtualMachineSnapshotStatusFromJSON(
  json: any,
): V1alpha1VirtualMachineSnapshotStatus {
  return V1alpha1VirtualMachineSnapshotStatusFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineSnapshotStatusFromJSONTyped(
  json: any,
  __ignoreDiscriminator: boolean,
): V1alpha1VirtualMachineSnapshotStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    conditions: !exists(json, 'conditions')
      ? undefined
      : (json['conditions'] as Array<any>).map(V1alpha1ConditionFromJSON),
    creationTime: !exists(json, 'creationTime') ? undefined : json['creationTime'],
    error: !exists(json, 'error') ? undefined : V1alpha1ErrorFromJSON(json['error']),
    indications: !exists(json, 'indications') ? undefined : json['indications'],
    phase: !exists(json, 'phase') ? undefined : json['phase'],
    readyToUse: !exists(json, 'readyToUse') ? undefined : json['readyToUse'],
    snapshotVolumes: !exists(json, 'snapshotVolumes')
      ? undefined
      : V1alpha1SnapshotVolumesListsFromJSON(json['snapshotVolumes']),
    sourceUID: !exists(json, 'sourceUID') ? undefined : json['sourceUID'],
    virtualMachineSnapshotContentName: !exists(json, 'virtualMachineSnapshotContentName')
      ? undefined
      : json['virtualMachineSnapshotContentName'],
  };
}

export function V1alpha1VirtualMachineSnapshotStatusToJSON(
  value?: V1alpha1VirtualMachineSnapshotStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    conditions:
      value.conditions === undefined
        ? undefined
        : (value.conditions as Array<any>).map(V1alpha1ConditionToJSON),
    creationTime: value.creationTime === undefined ? undefined : value.creationTime,
    error: V1alpha1ErrorToJSON(value.error),
    indications: value.indications,
    phase: value.phase,
    readyToUse: value.readyToUse,
    snapshotVolumes: V1alpha1SnapshotVolumesListsToJSON(value.snapshotVolumes),
    sourceUID: value.sourceUID,
    virtualMachineSnapshotContentName: value.virtualMachineSnapshotContentName,
  };
}
