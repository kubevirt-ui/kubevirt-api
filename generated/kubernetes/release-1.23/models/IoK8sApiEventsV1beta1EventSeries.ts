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
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 * @export
 * @interface IoK8sApiEventsV1beta1EventSeries
 */
export interface IoK8sApiEventsV1beta1EventSeries {
    /**
     * count is the number of occurrences in this series up to the last heartbeat time.
     * @type {number}
     * @memberof IoK8sApiEventsV1beta1EventSeries
     */
    count: number;
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {string}
     * @memberof IoK8sApiEventsV1beta1EventSeries
     */
    lastObservedTime: string;
}

export function IoK8sApiEventsV1beta1EventSeriesFromJSON(json: any): IoK8sApiEventsV1beta1EventSeries {
    return IoK8sApiEventsV1beta1EventSeriesFromJSONTyped(json, false);
}

export function IoK8sApiEventsV1beta1EventSeriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiEventsV1beta1EventSeries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'lastObservedTime': (new Date(json['lastObservedTime'])),
    };
}

export function IoK8sApiEventsV1beta1EventSeriesToJSON(value?: IoK8sApiEventsV1beta1EventSeries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'lastObservedTime': (value.lastObservedTime.toISOString()),
    };
}

