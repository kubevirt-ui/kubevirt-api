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
    V1MigrationConfiguration,
    V1MigrationConfigurationFromJSON,
    V1MigrationConfigurationFromJSONTyped,
    V1MigrationConfigurationToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1VirtualMachineInstanceMigrationState
 */
export interface V1VirtualMachineInstanceMigrationState {
    /**
     * Indicates that the migration has been requested to abort
     * @type {boolean}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    abortRequested?: boolean;
    /**
     * Indicates the final status of the live migration abortion
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    abortStatus?: string;
    /**
     * Indicates the migration completed
     * @type {boolean}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    completed?: boolean;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    endTimestamp?: string;
    /**
     * Indicates that the migration failed
     * @type {boolean}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    failed?: boolean;
    /**
     * Contains the reason why the migration failed
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    failureReason?: string;
    /**
     * 
     * @type {V1MigrationConfiguration}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    migrationConfiguration?: V1MigrationConfiguration;
    /**
     * Name of the migration policy. If string is empty, no policy is matched
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    migrationPolicyName?: string;
    /**
     * The VirtualMachineInstanceMigration object associated with this migration
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    migrationUid?: string;
    /**
     * Lets us know if the vmi is currently running pre or post copy migration
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    mode?: string;
    /**
     * The source node that the VMI originated on
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    sourceNode?: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    sourcePod?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    startTimestamp?: string;
    /**
     * The UID of the target attachment pod for hotplug volumes
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetAttachmentPodUID?: string;
    /**
     * If the VMI requires dedicated CPUs, this field will hold the dedicated CPU set on the target node
     * @type {Array<number>}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetCPUSet?: Array<number>;
    /**
     * The list of ports opened for live migration on the destination node
     * @type {{ [key: string]: number; }}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetDirectMigrationNodePorts?: { [key: string]: number; };
    /**
     * The target node that the VMI is moving to
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetNode?: string;
    /**
     * The address of the target node to use for the migration
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetNodeAddress?: string;
    /**
     * The Target Node has seen the Domain Start Event
     * @type {boolean}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetNodeDomainDetected?: boolean;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetNodeDomainReadyTimestamp?: string;
    /**
     * If the VMI requires dedicated CPUs, this field will hold the numa topology on the target node
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetNodeTopology?: string;
    /**
     * The target pod that the VMI is moving to
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationState
     */
    targetPod?: string;
}

export function V1VirtualMachineInstanceMigrationStateFromJSON(json: any): V1VirtualMachineInstanceMigrationState {
    return V1VirtualMachineInstanceMigrationStateFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceMigrationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceMigrationState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'abortRequested': !exists(json, 'abortRequested') ? undefined : json['abortRequested'],
        'abortStatus': !exists(json, 'abortStatus') ? undefined : json['abortStatus'],
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
        'endTimestamp': !exists(json, 'endTimestamp') ? undefined : (new Date(json['endTimestamp'])),
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
        'failureReason': !exists(json, 'failureReason') ? undefined : json['failureReason'],
        'migrationConfiguration': !exists(json, 'migrationConfiguration') ? undefined : V1MigrationConfigurationFromJSON(json['migrationConfiguration']),
        'migrationPolicyName': !exists(json, 'migrationPolicyName') ? undefined : json['migrationPolicyName'],
        'migrationUid': !exists(json, 'migrationUid') ? undefined : json['migrationUid'],
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'sourceNode': !exists(json, 'sourceNode') ? undefined : json['sourceNode'],
        'sourcePod': !exists(json, 'sourcePod') ? undefined : json['sourcePod'],
        'startTimestamp': !exists(json, 'startTimestamp') ? undefined : (new Date(json['startTimestamp'])),
        'targetAttachmentPodUID': !exists(json, 'targetAttachmentPodUID') ? undefined : json['targetAttachmentPodUID'],
        'targetCPUSet': !exists(json, 'targetCPUSet') ? undefined : json['targetCPUSet'],
        'targetDirectMigrationNodePorts': !exists(json, 'targetDirectMigrationNodePorts') ? undefined : json['targetDirectMigrationNodePorts'],
        'targetNode': !exists(json, 'targetNode') ? undefined : json['targetNode'],
        'targetNodeAddress': !exists(json, 'targetNodeAddress') ? undefined : json['targetNodeAddress'],
        'targetNodeDomainDetected': !exists(json, 'targetNodeDomainDetected') ? undefined : json['targetNodeDomainDetected'],
        'targetNodeDomainReadyTimestamp': !exists(json, 'targetNodeDomainReadyTimestamp') ? undefined : (new Date(json['targetNodeDomainReadyTimestamp'])),
        'targetNodeTopology': !exists(json, 'targetNodeTopology') ? undefined : json['targetNodeTopology'],
        'targetPod': !exists(json, 'targetPod') ? undefined : json['targetPod'],
    };
}

export function V1VirtualMachineInstanceMigrationStateToJSON(value?: V1VirtualMachineInstanceMigrationState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'abortRequested': value.abortRequested,
        'abortStatus': value.abortStatus,
        'completed': value.completed,
        'endTimestamp': value.endTimestamp === undefined ? undefined : (value.endTimestamp.toISOString()),
        'failed': value.failed,
        'failureReason': value.failureReason,
        'migrationConfiguration': V1MigrationConfigurationToJSON(value.migrationConfiguration),
        'migrationPolicyName': value.migrationPolicyName,
        'migrationUid': value.migrationUid,
        'mode': value.mode,
        'sourceNode': value.sourceNode,
        'sourcePod': value.sourcePod,
        'startTimestamp': value.startTimestamp === undefined ? undefined : (value.startTimestamp.toISOString()),
        'targetAttachmentPodUID': value.targetAttachmentPodUID,
        'targetCPUSet': value.targetCPUSet,
        'targetDirectMigrationNodePorts': value.targetDirectMigrationNodePorts,
        'targetNode': value.targetNode,
        'targetNodeAddress': value.targetNodeAddress,
        'targetNodeDomainDetected': value.targetNodeDomainDetected,
        'targetNodeDomainReadyTimestamp': value.targetNodeDomainReadyTimestamp === undefined ? undefined : (value.targetNodeDomainReadyTimestamp.toISOString()),
        'targetNodeTopology': value.targetNodeTopology,
        'targetPod': value.targetPod,
    };
}

