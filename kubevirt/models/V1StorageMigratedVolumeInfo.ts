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

import { exists, mapValues } from '../runtime';
import {
    V1PersistentVolumeClaimInfo,
    V1PersistentVolumeClaimInfoFromJSON,
    V1PersistentVolumeClaimInfoFromJSONTyped,
    V1PersistentVolumeClaimInfoToJSON,
} from './';

/**
 * StorageMigratedVolumeInfo tracks the information about the source and destination volumes during the volume migration
 * @export
 * @interface V1StorageMigratedVolumeInfo
 */
export interface V1StorageMigratedVolumeInfo {
    /**
     * 
     * @type {V1PersistentVolumeClaimInfo}
     * @memberof V1StorageMigratedVolumeInfo
     */
    destinationPVCInfo?: V1PersistentVolumeClaimInfo;
    /**
     * 
     * @type {V1PersistentVolumeClaimInfo}
     * @memberof V1StorageMigratedVolumeInfo
     */
    sourcePVCInfo?: V1PersistentVolumeClaimInfo;
    /**
     * VolumeName is the name of the volume that is being migrated
     * @type {string}
     * @memberof V1StorageMigratedVolumeInfo
     */
    volumeName: string;
}

export function V1StorageMigratedVolumeInfoFromJSON(json: any): V1StorageMigratedVolumeInfo {
    return V1StorageMigratedVolumeInfoFromJSONTyped(json, false);
}

export function V1StorageMigratedVolumeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StorageMigratedVolumeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destinationPVCInfo': !exists(json, 'destinationPVCInfo') ? undefined : V1PersistentVolumeClaimInfoFromJSON(json['destinationPVCInfo']),
        'sourcePVCInfo': !exists(json, 'sourcePVCInfo') ? undefined : V1PersistentVolumeClaimInfoFromJSON(json['sourcePVCInfo']),
        'volumeName': json['volumeName'],
    };
}

export function V1StorageMigratedVolumeInfoToJSON(value?: V1StorageMigratedVolumeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destinationPVCInfo': V1PersistentVolumeClaimInfoToJSON(value.destinationPVCInfo),
        'sourcePVCInfo': V1PersistentVolumeClaimInfoToJSON(value.sourcePVCInfo),
        'volumeName': value.volumeName,
    };
}

