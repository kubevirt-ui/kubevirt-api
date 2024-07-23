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
    IoK8sApiCoreV1EventSeries,
    IoK8sApiCoreV1EventSeriesFromJSON,
    IoK8sApiCoreV1EventSeriesFromJSONTyped,
    IoK8sApiCoreV1EventSeriesToJSON,
    IoK8sApiCoreV1EventSource,
    IoK8sApiCoreV1EventSourceFromJSON,
    IoK8sApiCoreV1EventSourceFromJSONTyped,
    IoK8sApiCoreV1EventSourceToJSON,
    IoK8sApiCoreV1ObjectReference,
    IoK8sApiCoreV1ObjectReferenceFromJSON,
    IoK8sApiCoreV1ObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1ObjectReferenceToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 * @export
 * @interface IoK8sApiCoreV1Event
 */
export interface IoK8sApiCoreV1Event {
    /**
     * What action was taken/failed regarding to the Regarding object.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    action?: string;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    apiVersion?: string;
    /**
     * The number of times this event has occurred.
     * @type {number}
     * @memberof IoK8sApiCoreV1Event
     */
    count?: number;
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    eventTime?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    firstTimestamp?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectReference}
     * @memberof IoK8sApiCoreV1Event
     */
    involvedObject: IoK8sApiCoreV1ObjectReference;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    kind?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    lastTimestamp?: string;
    /**
     * A human-readable description of the status of this operation.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    message?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1Event
     */
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    reason?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectReference}
     * @memberof IoK8sApiCoreV1Event
     */
    related?: IoK8sApiCoreV1ObjectReference;
    /**
     * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    reportingComponent?: string;
    /**
     * ID of the controller instance, e.g. `kubelet-xyzf`.
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    reportingInstance?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1EventSeries}
     * @memberof IoK8sApiCoreV1Event
     */
    series?: IoK8sApiCoreV1EventSeries;
    /**
     * 
     * @type {IoK8sApiCoreV1EventSource}
     * @memberof IoK8sApiCoreV1Event
     */
    source?: IoK8sApiCoreV1EventSource;
    /**
     * Type of this event (Normal, Warning), new types could be added in the future
     * @type {string}
     * @memberof IoK8sApiCoreV1Event
     */
    type?: string;
}

export function IoK8sApiCoreV1EventFromJSON(json: any): IoK8sApiCoreV1Event {
    return IoK8sApiCoreV1EventFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'eventTime': !exists(json, 'eventTime') ? undefined : (new Date(json['eventTime'])),
        'firstTimestamp': !exists(json, 'firstTimestamp') ? undefined : (new Date(json['firstTimestamp'])),
        'involvedObject': IoK8sApiCoreV1ObjectReferenceFromJSON(json['involvedObject']),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'lastTimestamp': !exists(json, 'lastTimestamp') ? undefined : (new Date(json['lastTimestamp'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'related': !exists(json, 'related') ? undefined : IoK8sApiCoreV1ObjectReferenceFromJSON(json['related']),
        'reportingComponent': !exists(json, 'reportingComponent') ? undefined : json['reportingComponent'],
        'reportingInstance': !exists(json, 'reportingInstance') ? undefined : json['reportingInstance'],
        'series': !exists(json, 'series') ? undefined : IoK8sApiCoreV1EventSeriesFromJSON(json['series']),
        'source': !exists(json, 'source') ? undefined : IoK8sApiCoreV1EventSourceFromJSON(json['source']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiCoreV1EventToJSON(value?: IoK8sApiCoreV1Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'apiVersion': value.apiVersion,
        'count': value.count,
        'eventTime': value.eventTime === undefined ? undefined : (value.eventTime.toISOString()),
        'firstTimestamp': value.firstTimestamp === undefined ? undefined : (value.firstTimestamp.toISOString()),
        'involvedObject': IoK8sApiCoreV1ObjectReferenceToJSON(value.involvedObject),
        'kind': value.kind,
        'lastTimestamp': value.lastTimestamp === undefined ? undefined : (value.lastTimestamp.toISOString()),
        'message': value.message,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'reason': value.reason,
        'related': IoK8sApiCoreV1ObjectReferenceToJSON(value.related),
        'reportingComponent': value.reportingComponent,
        'reportingInstance': value.reportingInstance,
        'series': IoK8sApiCoreV1EventSeriesToJSON(value.series),
        'source': IoK8sApiCoreV1EventSourceToJSON(value.source),
        'type': value.type,
    };
}

