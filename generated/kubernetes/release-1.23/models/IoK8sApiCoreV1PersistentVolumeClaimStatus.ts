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

import { exists, mapValues } from '../runtime';
import {
    IoK8sApiCoreV1PersistentVolumeClaimCondition,
    IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSON,
    IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSONTyped,
    IoK8sApiCoreV1PersistentVolumeClaimConditionToJSON,
} from './';

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeClaimStatus
 */
export interface IoK8sApiCoreV1PersistentVolumeClaimStatus {
    /**
     * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    accessModes?: Array<string>;
    /**
     * The storage resource within AllocatedResources tracks the capacity allocated to a PVC. It may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    allocatedResources?: { [key: string]: string; };
    /**
     * Represents the actual resources of the underlying volume.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    capacity?: { [key: string]: string; };
    /**
     * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
     * @type {Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    conditions?: Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>;
    /**
     * Phase represents the current phase of PersistentVolumeClaim.
     * 
     * Possible enum values:
     *  - `"Bound"` used for PersistentVolumeClaims that are bound
     *  - `"Lost"` used for PersistentVolumeClaims that lost their underlying PersistentVolume. The claim was bound to a PersistentVolume and this volume does not exist any longer and all data on it was lost.
     *  - `"Pending"` used for PersistentVolumeClaims that are not yet bound
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    phase?: IoK8sApiCoreV1PersistentVolumeClaimStatusPhaseEnum;
    /**
     * ResizeStatus stores status of resize operation. ResizeStatus is not set by default but when expansion is complete resizeStatus is set to empty string by resize controller or kubelet. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    resizeStatus?: string;
}

/**
* @export
* @enum {string}
*/
export enum IoK8sApiCoreV1PersistentVolumeClaimStatusPhaseEnum {
    Bound = 'Bound',
    Lost = 'Lost',
    Pending = 'Pending'
}

export function IoK8sApiCoreV1PersistentVolumeClaimStatusFromJSON(json: any): IoK8sApiCoreV1PersistentVolumeClaimStatus {
    return IoK8sApiCoreV1PersistentVolumeClaimStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeClaimStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PersistentVolumeClaimStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessModes': !exists(json, 'accessModes') ? undefined : json['accessModes'],
        'allocatedResources': !exists(json, 'allocatedResources') ? undefined : json['allocatedResources'],
        'capacity': !exists(json, 'capacity') ? undefined : json['capacity'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSON)),
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'resizeStatus': !exists(json, 'resizeStatus') ? undefined : json['resizeStatus'],
    };
}

export function IoK8sApiCoreV1PersistentVolumeClaimStatusToJSON(value?: IoK8sApiCoreV1PersistentVolumeClaimStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessModes': value.accessModes,
        'allocatedResources': value.allocatedResources,
        'capacity': value.capacity,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiCoreV1PersistentVolumeClaimConditionToJSON)),
        'phase': value.phase,
        'resizeStatus': value.resizeStatus,
    };
}
