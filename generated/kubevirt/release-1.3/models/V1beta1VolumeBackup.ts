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
    V1beta1PersistentVolumeClaim,
    V1beta1PersistentVolumeClaimFromJSON,
    V1beta1PersistentVolumeClaimFromJSONTyped,
    V1beta1PersistentVolumeClaimToJSON,
} from './';

/**
 * VolumeBackup contains the data neeed to restore a PVC
 * @export
 * @interface V1beta1VolumeBackup
 */
export interface V1beta1VolumeBackup {
    /**
     * 
     * @type {V1beta1PersistentVolumeClaim}
     * @memberof V1beta1VolumeBackup
     */
    persistentVolumeClaim: V1beta1PersistentVolumeClaim;
    /**
     * 
     * @type {string}
     * @memberof V1beta1VolumeBackup
     */
    volumeName: string;
    /**
     * 
     * @type {string}
     * @memberof V1beta1VolumeBackup
     */
    volumeSnapshotName?: string;
}

export function V1beta1VolumeBackupFromJSON(json: any): V1beta1VolumeBackup {
    return V1beta1VolumeBackupFromJSONTyped(json, false);
}

export function V1beta1VolumeBackupFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VolumeBackup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'persistentVolumeClaim': V1beta1PersistentVolumeClaimFromJSON(json['persistentVolumeClaim']),
        'volumeName': json['volumeName'],
        'volumeSnapshotName': !exists(json, 'volumeSnapshotName') ? undefined : json['volumeSnapshotName'],
    };
}

export function V1beta1VolumeBackupToJSON(value?: V1beta1VolumeBackup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'persistentVolumeClaim': V1beta1PersistentVolumeClaimToJSON(value.persistentVolumeClaim),
        'volumeName': value.volumeName,
        'volumeSnapshotName': value.volumeSnapshotName,
    };
}

