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
    V1PersistentVolumeClaimSpec,
    V1PersistentVolumeClaimSpecFromJSON,
    V1PersistentVolumeClaimSpecFromJSONTyped,
    V1PersistentVolumeClaimSpecToJSON,
    V1beta1DataVolumeCheckpoint,
    V1beta1DataVolumeCheckpointFromJSON,
    V1beta1DataVolumeCheckpointFromJSONTyped,
    V1beta1DataVolumeCheckpointToJSON,
    V1beta1DataVolumeSource,
    V1beta1DataVolumeSourceFromJSON,
    V1beta1DataVolumeSourceFromJSONTyped,
    V1beta1DataVolumeSourceToJSON,
    V1beta1DataVolumeSourceRef,
    V1beta1DataVolumeSourceRefFromJSON,
    V1beta1DataVolumeSourceRefFromJSONTyped,
    V1beta1DataVolumeSourceRefToJSON,
    V1beta1StorageSpec,
    V1beta1StorageSpecFromJSON,
    V1beta1StorageSpecFromJSONTyped,
    V1beta1StorageSpecToJSON,
} from './';

/**
 * DataVolumeSpec defines the DataVolume type specification
 * @export
 * @interface V1beta1DataVolumeSpec
 */
export interface V1beta1DataVolumeSpec {
    /**
     * Checkpoints is a list of DataVolumeCheckpoints, representing stages in a multistage import.
     * @type {Array<V1beta1DataVolumeCheckpoint>}
     * @memberof V1beta1DataVolumeSpec
     */
    checkpoints?: Array<V1beta1DataVolumeCheckpoint>;
    /**
     * DataVolumeContentType options: "kubevirt", "archive"
     * @type {string}
     * @memberof V1beta1DataVolumeSpec
     */
    contentType?: string;
    /**
     * FinalCheckpoint indicates whether the current DataVolumeCheckpoint is the final checkpoint.
     * @type {boolean}
     * @memberof V1beta1DataVolumeSpec
     */
    finalCheckpoint?: boolean;
    /**
     * Preallocation controls whether storage for DataVolumes should be allocated in advance.
     * @type {boolean}
     * @memberof V1beta1DataVolumeSpec
     */
    preallocation?: boolean;
    /**
     * PriorityClassName for Importer, Cloner and Uploader pod
     * @type {string}
     * @memberof V1beta1DataVolumeSpec
     */
    priorityClassName?: string;
    /**
     * 
     * @type {V1PersistentVolumeClaimSpec}
     * @memberof V1beta1DataVolumeSpec
     */
    pvc?: V1PersistentVolumeClaimSpec;
    /**
     * 
     * @type {V1beta1DataVolumeSource}
     * @memberof V1beta1DataVolumeSpec
     */
    source?: V1beta1DataVolumeSource;
    /**
     * 
     * @type {V1beta1DataVolumeSourceRef}
     * @memberof V1beta1DataVolumeSpec
     */
    sourceRef?: V1beta1DataVolumeSourceRef;
    /**
     * 
     * @type {V1beta1StorageSpec}
     * @memberof V1beta1DataVolumeSpec
     */
    storage?: V1beta1StorageSpec;
}

export function V1beta1DataVolumeSpecFromJSON(json: any): V1beta1DataVolumeSpec {
    return V1beta1DataVolumeSpecFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkpoints': !exists(json, 'checkpoints') ? undefined : ((json['checkpoints'] as Array<any>).map(V1beta1DataVolumeCheckpointFromJSON)),
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'finalCheckpoint': !exists(json, 'finalCheckpoint') ? undefined : json['finalCheckpoint'],
        'preallocation': !exists(json, 'preallocation') ? undefined : json['preallocation'],
        'priorityClassName': !exists(json, 'priorityClassName') ? undefined : json['priorityClassName'],
        'pvc': !exists(json, 'pvc') ? undefined : V1PersistentVolumeClaimSpecFromJSON(json['pvc']),
        'source': !exists(json, 'source') ? undefined : V1beta1DataVolumeSourceFromJSON(json['source']),
        'sourceRef': !exists(json, 'sourceRef') ? undefined : V1beta1DataVolumeSourceRefFromJSON(json['sourceRef']),
        'storage': !exists(json, 'storage') ? undefined : V1beta1StorageSpecFromJSON(json['storage']),
    };
}

export function V1beta1DataVolumeSpecToJSON(value?: V1beta1DataVolumeSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checkpoints': value.checkpoints === undefined ? undefined : ((value.checkpoints as Array<any>).map(V1beta1DataVolumeCheckpointToJSON)),
        'contentType': value.contentType,
        'finalCheckpoint': value.finalCheckpoint,
        'preallocation': value.preallocation,
        'priorityClassName': value.priorityClassName,
        'pvc': V1PersistentVolumeClaimSpecToJSON(value.pvc),
        'source': V1beta1DataVolumeSourceToJSON(value.source),
        'sourceRef': V1beta1DataVolumeSourceRefToJSON(value.sourceRef),
        'storage': V1beta1StorageSpecToJSON(value.storage),
    };
}

