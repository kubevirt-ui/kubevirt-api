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
    IoK8sApiResourceV1beta1Counter,
    IoK8sApiResourceV1beta1CounterFromJSON,
    IoK8sApiResourceV1beta1CounterFromJSONTyped,
    IoK8sApiResourceV1beta1CounterToJSON,
} from './';

/**
 * CounterSet defines a named set of counters that are available to be used by devices defined in the ResourceSlice.
 * 
 * The counters are not allocatable by themselves, but can be referenced by devices. When a device is allocated, the portion of counters it uses will no longer be available for use by other devices.
 * @export
 * @interface IoK8sApiResourceV1beta1CounterSet
 */
export interface IoK8sApiResourceV1beta1CounterSet {
    /**
     * Counters defines the set of counters for this CounterSet The name of each counter must be unique in that set and must be a DNS label.
     * 
     * The maximum number of counters is 32.
     * @type {{ [key: string]: IoK8sApiResourceV1beta1Counter; }}
     * @memberof IoK8sApiResourceV1beta1CounterSet
     */
    counters: { [key: string]: IoK8sApiResourceV1beta1Counter; };
    /**
     * Name defines the name of the counter set. It must be a DNS label.
     * @type {string}
     * @memberof IoK8sApiResourceV1beta1CounterSet
     */
    name: string;
}

export function IoK8sApiResourceV1beta1CounterSetFromJSON(json: any): IoK8sApiResourceV1beta1CounterSet {
    return IoK8sApiResourceV1beta1CounterSetFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1beta1CounterSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1beta1CounterSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'counters': (mapValues(json['counters'], IoK8sApiResourceV1beta1CounterFromJSON)),
        'name': json['name'],
    };
}

export function IoK8sApiResourceV1beta1CounterSetToJSON(value?: IoK8sApiResourceV1beta1CounterSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'counters': (mapValues(value.counters, IoK8sApiResourceV1beta1CounterToJSON)),
        'name': value.name,
    };
}

