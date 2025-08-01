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
  IoK8sApiCoreV1ModifyVolumeStatus,
  IoK8sApiCoreV1ModifyVolumeStatusFromJSON,
  IoK8sApiCoreV1ModifyVolumeStatusToJSON,
  IoK8sApiCoreV1PersistentVolumeClaimCondition,
  IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSON,
  IoK8sApiCoreV1PersistentVolumeClaimConditionToJSON,
} from './';

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeClaimStatus
 */
export interface IoK8sApiCoreV1PersistentVolumeClaimStatus {
  /**
   * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   * @type {Array<string>}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  accessModes?: Array<string>;
  /**
   * allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either:
   * 	* Un-prefixed keys:
   * 		- storage - the capacity of the volume.
   * 	* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
   * Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
   *
   * ClaimResourceStatus can be in any of following states:
   * 	- ControllerResizeInProgress:
   * 		State set when resize controller starts resizing the volume in control-plane.
   * 	- ControllerResizeFailed:
   * 		State set when resize has failed in resize controller with a terminal error.
   * 	- NodeResizePending:
   * 		State set when resize controller has finished resizing the volume but further resizing of
   * 		volume is needed on the node.
   * 	- NodeResizeInProgress:
   * 		State set when kubelet starts resizing the volume.
   * 	- NodeResizeFailed:
   * 		State set when resizing has failed in kubelet with a terminal error. Transient errors don't set
   * 		NodeResizeFailed.
   * For example: if expanding a PVC for more capacity - this field can be one of the following states:
   * 	- pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeInProgress"
   *      - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeFailed"
   *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizePending"
   *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeInProgress"
   *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeFailed"
   * When this field is not set, it means that no resize operation is in progress for the given PVC.
   *
   * A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
   *
   * This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  allocatedResourceStatuses?: { [key: string]: string };
  /**
   * allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either:
   * 	* Un-prefixed keys:
   * 		- storage - the capacity of the volume.
   * 	* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
   * Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
   *
   * Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity.
   *
   * A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
   *
   * This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  allocatedResources?: { [key: string]: string };
  /**
   * capacity represents the actual resources of the underlying volume.
   * @type {{ [key: string]: string; }}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  capacity?: { [key: string]: string };
  /**
   * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'Resizing'.
   * @type {Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  conditions?: Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>;
  /**
   * currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using. When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  currentVolumeAttributesClassName?: string;
  /**
   *
   * @type {IoK8sApiCoreV1ModifyVolumeStatus}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  modifyVolumeStatus?: IoK8sApiCoreV1ModifyVolumeStatus;
  /**
   * phase represents the current phase of PersistentVolumeClaim.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
   */
  phase?: string;
}

export function IoK8sApiCoreV1PersistentVolumeClaimStatusFromJSON(
  json: any,
): IoK8sApiCoreV1PersistentVolumeClaimStatus {
  return IoK8sApiCoreV1PersistentVolumeClaimStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeClaimStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PersistentVolumeClaimStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accessModes: !exists(json, 'accessModes') ? undefined : json['accessModes'],
    allocatedResourceStatuses: !exists(json, 'allocatedResourceStatuses')
      ? undefined
      : json['allocatedResourceStatuses'],
    allocatedResources: !exists(json, 'allocatedResources')
      ? undefined
      : json['allocatedResources'],
    capacity: !exists(json, 'capacity') ? undefined : json['capacity'],
    conditions: !exists(json, 'conditions')
      ? undefined
      : (json['conditions'] as Array<any>).map(
          IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSON,
        ),
    currentVolumeAttributesClassName: !exists(json, 'currentVolumeAttributesClassName')
      ? undefined
      : json['currentVolumeAttributesClassName'],
    modifyVolumeStatus: !exists(json, 'modifyVolumeStatus')
      ? undefined
      : IoK8sApiCoreV1ModifyVolumeStatusFromJSON(json['modifyVolumeStatus']),
    phase: !exists(json, 'phase') ? undefined : json['phase'],
  };
}

export function IoK8sApiCoreV1PersistentVolumeClaimStatusToJSON(
  value?: IoK8sApiCoreV1PersistentVolumeClaimStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accessModes: value.accessModes,
    allocatedResourceStatuses: value.allocatedResourceStatuses,
    allocatedResources: value.allocatedResources,
    capacity: value.capacity,
    conditions:
      value.conditions === undefined
        ? undefined
        : (value.conditions as Array<any>).map(IoK8sApiCoreV1PersistentVolumeClaimConditionToJSON),
    currentVolumeAttributesClassName: value.currentVolumeAttributesClassName,
    modifyVolumeStatus: IoK8sApiCoreV1ModifyVolumeStatusToJSON(value.modifyVolumeStatus),
    phase: value.phase,
  };
}
