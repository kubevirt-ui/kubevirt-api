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
/**
 * DataVolumeCheckpoint defines a stage in a warm migration.
 * @export
 * @interface V1beta1DataVolumeCheckpoint
 */
export interface V1beta1DataVolumeCheckpoint {
    /**
     * Current is the identifier of the snapshot created for this checkpoint.
     * @type {string}
     * @memberof V1beta1DataVolumeCheckpoint
     */
    current: string;
    /**
     * Previous is the identifier of the snapshot from the previous checkpoint.
     * @type {string}
     * @memberof V1beta1DataVolumeCheckpoint
     */
    previous: string;
}

export function V1beta1DataVolumeCheckpointFromJSON(json: any): V1beta1DataVolumeCheckpoint {
    return V1beta1DataVolumeCheckpointFromJSONTyped(json, false);
}

export function V1beta1DataVolumeCheckpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeCheckpoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': json['current'],
        'previous': json['previous'],
    };
}

export function V1beta1DataVolumeCheckpointToJSON(value?: V1beta1DataVolumeCheckpoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': value.current,
        'previous': value.previous,
    };
}

