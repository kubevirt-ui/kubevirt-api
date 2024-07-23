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
 * UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
 * @export
 * @interface IoK8sApiBatchV1UncountedTerminatedPods
 */
export interface IoK8sApiBatchV1UncountedTerminatedPods {
    /**
     * failed holds UIDs of failed Pods.
     * @type {Array<string>}
     * @memberof IoK8sApiBatchV1UncountedTerminatedPods
     */
    failed?: Array<string>;
    /**
     * succeeded holds UIDs of succeeded Pods.
     * @type {Array<string>}
     * @memberof IoK8sApiBatchV1UncountedTerminatedPods
     */
    succeeded?: Array<string>;
}

export function IoK8sApiBatchV1UncountedTerminatedPodsFromJSON(json: any): IoK8sApiBatchV1UncountedTerminatedPods {
    return IoK8sApiBatchV1UncountedTerminatedPodsFromJSONTyped(json, false);
}

export function IoK8sApiBatchV1UncountedTerminatedPodsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiBatchV1UncountedTerminatedPods {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
    };
}

export function IoK8sApiBatchV1UncountedTerminatedPodsToJSON(value?: IoK8sApiBatchV1UncountedTerminatedPods | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'failed': value.failed,
        'succeeded': value.succeeded,
    };
}

