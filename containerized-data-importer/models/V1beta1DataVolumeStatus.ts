/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1beta1DataVolumeCondition,
    V1beta1DataVolumeConditionFromJSON,
    V1beta1DataVolumeConditionFromJSONTyped,
    V1beta1DataVolumeConditionToJSON,
} from './';

/**
 * DataVolumeStatus contains the current status of the DataVolume
 * @export
 * @interface V1beta1DataVolumeStatus
 */
export interface V1beta1DataVolumeStatus {
    /**
     * ClaimName is the name of the underlying PVC used by the DataVolume.
     * @type {string}
     * @memberof V1beta1DataVolumeStatus
     */
    claimName?: string;
    /**
     * 
     * @type {Array<V1beta1DataVolumeCondition>}
     * @memberof V1beta1DataVolumeStatus
     */
    conditions?: Array<V1beta1DataVolumeCondition>;
    /**
     * Phase is the current phase of the data volume
     * @type {string}
     * @memberof V1beta1DataVolumeStatus
     */
    phase?: string;
    /**
     * 
     * @type {string}
     * @memberof V1beta1DataVolumeStatus
     */
    progress?: string;
    /**
     * RestartCount is the number of times the pod populating the DataVolume has restarted
     * @type {number}
     * @memberof V1beta1DataVolumeStatus
     */
    restartCount?: number;
}

export function V1beta1DataVolumeStatusFromJSON(json: any): V1beta1DataVolumeStatus {
    return V1beta1DataVolumeStatusFromJSONTyped(json, false);
}

export function V1beta1DataVolumeStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1DataVolumeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'claimName': !exists(json, 'claimName') ? undefined : json['claimName'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1beta1DataVolumeConditionFromJSON)),
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'progress': !exists(json, 'progress') ? undefined : json['progress'],
        'restartCount': !exists(json, 'restartCount') ? undefined : json['restartCount'],
    };
}

export function V1beta1DataVolumeStatusToJSON(value?: V1beta1DataVolumeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'claimName': value.claimName,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1beta1DataVolumeConditionToJSON)),
        'phase': value.phase,
        'progress': value.progress,
        'restartCount': value.restartCount,
    };
}

