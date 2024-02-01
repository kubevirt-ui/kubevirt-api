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
  V1ContainerDiskInfo,
  V1ContainerDiskInfoFromJSON,
  V1ContainerDiskInfoToJSON,
  V1DomainMemoryDumpInfo,
  V1DomainMemoryDumpInfoFromJSON,
  V1DomainMemoryDumpInfoToJSON,
  V1HotplugVolumeStatus,
  V1HotplugVolumeStatusFromJSON,
  V1HotplugVolumeStatusToJSON,
  V1PersistentVolumeClaimInfo,
  V1PersistentVolumeClaimInfoFromJSON,
  V1PersistentVolumeClaimInfoToJSON,
} from './';

/**
 * VolumeStatus represents information about the status of volumes attached to the VirtualMachineInstance.
 * @export
 * @interface V1VolumeStatus
 */
export interface V1VolumeStatus {
  /**
   *
   * @type {V1ContainerDiskInfo}
   * @memberof V1VolumeStatus
   */
  containerDiskVolume?: V1ContainerDiskInfo;
  /**
   *
   * @type {V1HotplugVolumeStatus}
   * @memberof V1VolumeStatus
   */
  hotplugVolume?: V1HotplugVolumeStatus;
  /**
   *
   * @type {V1DomainMemoryDumpInfo}
   * @memberof V1VolumeStatus
   */
  memoryDumpVolume?: V1DomainMemoryDumpInfo;
  /**
   * Message is a detailed message about the current hotplug volume phase
   * @type {string}
   * @memberof V1VolumeStatus
   */
  message?: string;
  /**
   * Name is the name of the volume
   * @type {string}
   * @memberof V1VolumeStatus
   */
  name: string;
  /**
   *
   * @type {V1PersistentVolumeClaimInfo}
   * @memberof V1VolumeStatus
   */
  persistentVolumeClaimInfo?: V1PersistentVolumeClaimInfo;
  /**
   * Phase is the phase
   * @type {string}
   * @memberof V1VolumeStatus
   */
  phase?: string;
  /**
   * Reason is a brief description of why we are in the current hotplug volume phase
   * @type {string}
   * @memberof V1VolumeStatus
   */
  reason?: string;
  /**
   * Represents the size of the volume
   * @type {number}
   * @memberof V1VolumeStatus
   */
  size?: number;
  /**
   * Target is the target name used when adding the volume to the VM, eg: vda
   * @type {string}
   * @memberof V1VolumeStatus
   */
  target: string;
}

export function V1VolumeStatusFromJSON(json: any): V1VolumeStatus {
  return V1VolumeStatusFromJSONTyped(json, false);
}

export function V1VolumeStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VolumeStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    containerDiskVolume: !exists(json, 'containerDiskVolume')
      ? undefined
      : V1ContainerDiskInfoFromJSON(json['containerDiskVolume']),
    hotplugVolume: !exists(json, 'hotplugVolume')
      ? undefined
      : V1HotplugVolumeStatusFromJSON(json['hotplugVolume']),
    memoryDumpVolume: !exists(json, 'memoryDumpVolume')
      ? undefined
      : V1DomainMemoryDumpInfoFromJSON(json['memoryDumpVolume']),
    message: !exists(json, 'message') ? undefined : json['message'],
    name: json['name'],
    persistentVolumeClaimInfo: !exists(json, 'persistentVolumeClaimInfo')
      ? undefined
      : V1PersistentVolumeClaimInfoFromJSON(json['persistentVolumeClaimInfo']),
    phase: !exists(json, 'phase') ? undefined : json['phase'],
    reason: !exists(json, 'reason') ? undefined : json['reason'],
    size: !exists(json, 'size') ? undefined : json['size'],
    target: json['target'],
  };
}

export function V1VolumeStatusToJSON(value?: V1VolumeStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    containerDiskVolume: V1ContainerDiskInfoToJSON(value.containerDiskVolume),
    hotplugVolume: V1HotplugVolumeStatusToJSON(value.hotplugVolume),
    memoryDumpVolume: V1DomainMemoryDumpInfoToJSON(value.memoryDumpVolume),
    message: value.message,
    name: value.name,
    persistentVolumeClaimInfo: V1PersistentVolumeClaimInfoToJSON(value.persistentVolumeClaimInfo),
    phase: value.phase,
    reason: value.reason,
    size: value.size,
    target: value.target,
  };
}
