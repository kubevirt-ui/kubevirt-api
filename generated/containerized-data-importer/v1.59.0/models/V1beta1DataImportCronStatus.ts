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
    V1beta1DataImportCronCondition,
    V1beta1DataImportCronConditionFromJSON,
    V1beta1DataImportCronConditionFromJSONTyped,
    V1beta1DataImportCronConditionToJSON,
    V1beta1DataVolumeSourcePVC,
    V1beta1DataVolumeSourcePVCFromJSON,
    V1beta1DataVolumeSourcePVCFromJSONTyped,
    V1beta1DataVolumeSourcePVCToJSON,
    V1beta1ImportStatus,
    V1beta1ImportStatusFromJSON,
    V1beta1ImportStatusFromJSONTyped,
    V1beta1ImportStatusToJSON,
} from './';

/**
 * DataImportCronStatus provides the most recently observed status of the DataImportCron
 * @export
 * @interface V1beta1DataImportCronStatus
 */
export interface V1beta1DataImportCronStatus {
    /**
     * 
     * @type {Array<V1beta1DataImportCronCondition>}
     * @memberof V1beta1DataImportCronStatus
     */
    conditions?: Array<V1beta1DataImportCronCondition>;
    /**
     * CurrentImports are the imports in progress. Currently only a single import is supported.
     * @type {Array<V1beta1ImportStatus>}
     * @memberof V1beta1DataImportCronStatus
     */
    currentImports?: Array<V1beta1ImportStatus>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1beta1DataImportCronStatus
     */
    lastExecutionTimestamp?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1beta1DataImportCronStatus
     */
    lastImportTimestamp?: string;
    /**
     * 
     * @type {V1beta1DataVolumeSourcePVC}
     * @memberof V1beta1DataImportCronStatus
     */
    lastImportedPVC?: V1beta1DataVolumeSourcePVC;
    /**
     * SourceFormat defines the format of the DataImportCron-created disk image sources
     * @type {string}
     * @memberof V1beta1DataImportCronStatus
     */
    sourceFormat?: string;
}

export function V1beta1DataImportCronStatusFromJSON(json: any): V1beta1DataImportCronStatus {
    return V1beta1DataImportCronStatusFromJSONTyped(json, false);
}

export function V1beta1DataImportCronStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataImportCronStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1beta1DataImportCronConditionFromJSON)),
        'currentImports': !exists(json, 'currentImports') ? undefined : ((json['currentImports'] as Array<any>).map(V1beta1ImportStatusFromJSON)),
        'lastExecutionTimestamp': !exists(json, 'lastExecutionTimestamp') ? undefined : (new Date(json['lastExecutionTimestamp'])),
        'lastImportTimestamp': !exists(json, 'lastImportTimestamp') ? undefined : (new Date(json['lastImportTimestamp'])),
        'lastImportedPVC': !exists(json, 'lastImportedPVC') ? undefined : V1beta1DataVolumeSourcePVCFromJSON(json['lastImportedPVC']),
        'sourceFormat': !exists(json, 'sourceFormat') ? undefined : json['sourceFormat'],
    };
}

export function V1beta1DataImportCronStatusToJSON(value?: V1beta1DataImportCronStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1beta1DataImportCronConditionToJSON)),
        'currentImports': value.currentImports === undefined ? undefined : ((value.currentImports as Array<any>).map(V1beta1ImportStatusToJSON)),
        'lastExecutionTimestamp': value.lastExecutionTimestamp === undefined ? undefined : (value.lastExecutionTimestamp.toISOString()),
        'lastImportTimestamp': value.lastImportTimestamp === undefined ? undefined : (value.lastImportTimestamp.toISOString()),
        'lastImportedPVC': V1beta1DataVolumeSourcePVCToJSON(value.lastImportedPVC),
        'sourceFormat': value.sourceFormat,
    };
}

