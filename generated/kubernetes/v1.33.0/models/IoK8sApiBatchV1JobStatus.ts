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
    IoK8sApiBatchV1JobCondition,
    IoK8sApiBatchV1JobConditionFromJSON,
    IoK8sApiBatchV1JobConditionFromJSONTyped,
    IoK8sApiBatchV1JobConditionToJSON,
    IoK8sApiBatchV1UncountedTerminatedPods,
    IoK8sApiBatchV1UncountedTerminatedPodsFromJSON,
    IoK8sApiBatchV1UncountedTerminatedPodsFromJSONTyped,
    IoK8sApiBatchV1UncountedTerminatedPodsToJSON,
} from './';

/**
 * JobStatus represents the current state of a Job.
 * @export
 * @interface IoK8sApiBatchV1JobStatus
 */
export interface IoK8sApiBatchV1JobStatus {
    /**
     * The number of pending and running pods which are not terminating (without a deletionTimestamp). The value is zero for finished jobs.
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    active?: number;
    /**
     * completedIndexes holds the completed indexes when .spec.completionMode = "Indexed" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7".
     * @type {string}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    completedIndexes?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    completionTime?: string;
    /**
     * The latest available observations of an object's current state. When a Job fails, one of the conditions will have type "Failed" and status true. When a Job is suspended, one of the conditions will have type "Suspended" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type "Complete" and status true.
     * 
     * A job is considered finished when it is in a terminal condition, either "Complete" or "Failed". A Job cannot have both the "Complete" and "Failed" conditions. Additionally, it cannot be in the "Complete" and "FailureTarget" conditions. The "Complete", "Failed" and "FailureTarget" conditions cannot be disabled.
     * 
     * More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     * @type {Array<IoK8sApiBatchV1JobCondition>}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    conditions?: Array<IoK8sApiBatchV1JobCondition>;
    /**
     * The number of pods which reached phase Failed. The value increases monotonically.
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    failed?: number;
    /**
     * FailedIndexes holds the failed indexes when spec.backoffLimitPerIndex is set. The indexes are represented in the text format analogous as for the `completedIndexes` field, ie. they are kept as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the failed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7". The set of failed indexes cannot overlap with the set of completed indexes.
     * @type {string}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    failedIndexes?: string;
    /**
     * The number of active pods which have a Ready condition and are not terminating (without a deletionTimestamp).
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    ready?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    startTime?: string;
    /**
     * The number of pods which reached phase Succeeded. The value increases monotonically for a given spec. However, it may decrease in reaction to scale down of elastic indexed jobs.
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    succeeded?: number;
    /**
     * The number of pods which are terminating (in phase Pending or Running and have a deletionTimestamp).
     * 
     * This field is beta-level. The job controller populates the field when the feature gate JobPodReplacementPolicy is enabled (enabled by default).
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    terminating?: number;
    /**
     * 
     * @type {IoK8sApiBatchV1UncountedTerminatedPods}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    uncountedTerminatedPods?: IoK8sApiBatchV1UncountedTerminatedPods;
}

export function IoK8sApiBatchV1JobStatusFromJSON(json: any): IoK8sApiBatchV1JobStatus {
    return IoK8sApiBatchV1JobStatusFromJSONTyped(json, false);
}

export function IoK8sApiBatchV1JobStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiBatchV1JobStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'completedIndexes': !exists(json, 'completedIndexes') ? undefined : json['completedIndexes'],
        'completionTime': !exists(json, 'completionTime') ? undefined : (new Date(json['completionTime'])),
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiBatchV1JobConditionFromJSON)),
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
        'failedIndexes': !exists(json, 'failedIndexes') ? undefined : json['failedIndexes'],
        'ready': !exists(json, 'ready') ? undefined : json['ready'],
        'startTime': !exists(json, 'startTime') ? undefined : (new Date(json['startTime'])),
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
        'terminating': !exists(json, 'terminating') ? undefined : json['terminating'],
        'uncountedTerminatedPods': !exists(json, 'uncountedTerminatedPods') ? undefined : IoK8sApiBatchV1UncountedTerminatedPodsFromJSON(json['uncountedTerminatedPods']),
    };
}

export function IoK8sApiBatchV1JobStatusToJSON(value?: IoK8sApiBatchV1JobStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'completedIndexes': value.completedIndexes,
        'completionTime': value.completionTime === undefined ? undefined : (value.completionTime.toISOString()),
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiBatchV1JobConditionToJSON)),
        'failed': value.failed,
        'failedIndexes': value.failedIndexes,
        'ready': value.ready,
        'startTime': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'succeeded': value.succeeded,
        'terminating': value.terminating,
        'uncountedTerminatedPods': IoK8sApiBatchV1UncountedTerminatedPodsToJSON(value.uncountedTerminatedPods),
    };
}

