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
    V1beta1DataVolumeSourcePVC,
    V1beta1DataVolumeSourcePVCFromJSON,
    V1beta1DataVolumeSourcePVCFromJSONTyped,
    V1beta1DataVolumeSourcePVCToJSON,
    V1beta1DataVolumeSourceSnapshot,
    V1beta1DataVolumeSourceSnapshotFromJSON,
    V1beta1DataVolumeSourceSnapshotFromJSONTyped,
    V1beta1DataVolumeSourceSnapshotToJSON,
} from './';

/**
 * DataSourceSource represents the source for our DataSource
 * @export
 * @interface V1beta1DataSourceSource
 */
export interface V1beta1DataSourceSource {
    /**
     * 
     * @type {V1beta1DataVolumeSourcePVC}
     * @memberof V1beta1DataSourceSource
     */
    pvc?: V1beta1DataVolumeSourcePVC;
    /**
     * 
     * @type {V1beta1DataVolumeSourceSnapshot}
     * @memberof V1beta1DataSourceSource
     */
    snapshot?: V1beta1DataVolumeSourceSnapshot;
}

export function V1beta1DataSourceSourceFromJSON(json: any): V1beta1DataSourceSource {
    return V1beta1DataSourceSourceFromJSONTyped(json, false);
}

export function V1beta1DataSourceSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataSourceSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pvc': !exists(json, 'pvc') ? undefined : V1beta1DataVolumeSourcePVCFromJSON(json['pvc']),
        'snapshot': !exists(json, 'snapshot') ? undefined : V1beta1DataVolumeSourceSnapshotFromJSON(json['snapshot']),
    };
}

export function V1beta1DataSourceSourceToJSON(value?: V1beta1DataSourceSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pvc': V1beta1DataVolumeSourcePVCToJSON(value.pvc),
        'snapshot': V1beta1DataVolumeSourceSnapshotToJSON(value.snapshot),
    };
}

