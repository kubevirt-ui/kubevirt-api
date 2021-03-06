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
    V1alpha1PersistentVolumeClaim,
    V1alpha1PersistentVolumeClaimFromJSON,
    V1alpha1PersistentVolumeClaimFromJSONTyped,
    V1alpha1PersistentVolumeClaimToJSON,
} from './';

/**
 * VolumeBackup contains the data neeed to restore a PVC
 * @export
 * @interface V1alpha1VolumeBackup
 */
export interface V1alpha1VolumeBackup {
    /**
     * 
     * @type {V1alpha1PersistentVolumeClaim}
     * @memberof V1alpha1VolumeBackup
     */
    persistentVolumeClaim: V1alpha1PersistentVolumeClaim;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VolumeBackup
     */
    volumeName: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VolumeBackup
     */
    volumeSnapshotName?: string;
}

export function V1alpha1VolumeBackupFromJSON(json: any): V1alpha1VolumeBackup {
    return V1alpha1VolumeBackupFromJSONTyped(json, false);
}

export function V1alpha1VolumeBackupFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VolumeBackup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'persistentVolumeClaim': V1alpha1PersistentVolumeClaimFromJSON(json['persistentVolumeClaim']),
        'volumeName': json['volumeName'],
        'volumeSnapshotName': !exists(json, 'volumeSnapshotName') ? undefined : json['volumeSnapshotName'],
    };
}

export function V1alpha1VolumeBackupToJSON(value?: V1alpha1VolumeBackup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'persistentVolumeClaim': V1alpha1PersistentVolumeClaimToJSON(value.persistentVolumeClaim),
        'volumeName': value.volumeName,
        'volumeSnapshotName': value.volumeSnapshotName,
    };
}

