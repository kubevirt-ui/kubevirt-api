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
    IoK8sApiResourceV1alpha3AllocatedDeviceStatus,
    IoK8sApiResourceV1alpha3AllocatedDeviceStatusFromJSON,
    IoK8sApiResourceV1alpha3AllocatedDeviceStatusFromJSONTyped,
    IoK8sApiResourceV1alpha3AllocatedDeviceStatusToJSON,
    IoK8sApiResourceV1alpha3AllocationResult,
    IoK8sApiResourceV1alpha3AllocationResultFromJSON,
    IoK8sApiResourceV1alpha3AllocationResultFromJSONTyped,
    IoK8sApiResourceV1alpha3AllocationResultToJSON,
    IoK8sApiResourceV1alpha3ResourceClaimConsumerReference,
    IoK8sApiResourceV1alpha3ResourceClaimConsumerReferenceFromJSON,
    IoK8sApiResourceV1alpha3ResourceClaimConsumerReferenceFromJSONTyped,
    IoK8sApiResourceV1alpha3ResourceClaimConsumerReferenceToJSON,
} from './';

/**
 * ResourceClaimStatus tracks whether the resource has been allocated and what the result of that was.
 * @export
 * @interface IoK8sApiResourceV1alpha3ResourceClaimStatus
 */
export interface IoK8sApiResourceV1alpha3ResourceClaimStatus {
    /**
     * 
     * @type {IoK8sApiResourceV1alpha3AllocationResult}
     * @memberof IoK8sApiResourceV1alpha3ResourceClaimStatus
     */
    allocation?: IoK8sApiResourceV1alpha3AllocationResult;
    /**
     * Devices contains the status of each device allocated for this claim, as reported by the driver. This can include driver-specific information. Entries are owned by their respective drivers.
     * @type {Array<IoK8sApiResourceV1alpha3AllocatedDeviceStatus>}
     * @memberof IoK8sApiResourceV1alpha3ResourceClaimStatus
     */
    devices?: Array<IoK8sApiResourceV1alpha3AllocatedDeviceStatus>;
    /**
     * ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started. A claim that is in use or might be in use because it has been reserved must not get deallocated.
     * 
     * In a cluster with multiple scheduler instances, two pods might get scheduled concurrently by different schedulers. When they reference the same ResourceClaim which already has reached its maximum number of consumers, only one pod can be scheduled.
     * 
     * Both schedulers try to add their pod to the claim.status.reservedFor field, but only the update that reaches the API server first gets stored. The other one fails with an error and the scheduler which issued it knows that it must put the pod back into the queue, waiting for the ResourceClaim to become usable again.
     * 
     * There can be at most 256 such reservations. This may get increased in the future, but not reduced.
     * @type {Array<IoK8sApiResourceV1alpha3ResourceClaimConsumerReference>}
     * @memberof IoK8sApiResourceV1alpha3ResourceClaimStatus
     */
    reservedFor?: Array<IoK8sApiResourceV1alpha3ResourceClaimConsumerReference>;
}

export function IoK8sApiResourceV1alpha3ResourceClaimStatusFromJSON(json: any): IoK8sApiResourceV1alpha3ResourceClaimStatus {
    return IoK8sApiResourceV1alpha3ResourceClaimStatusFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha3ResourceClaimStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha3ResourceClaimStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allocation': !exists(json, 'allocation') ? undefined : IoK8sApiResourceV1alpha3AllocationResultFromJSON(json['allocation']),
        'devices': !exists(json, 'devices') ? undefined : ((json['devices'] as Array<any>).map(IoK8sApiResourceV1alpha3AllocatedDeviceStatusFromJSON)),
        'reservedFor': !exists(json, 'reservedFor') ? undefined : ((json['reservedFor'] as Array<any>).map(IoK8sApiResourceV1alpha3ResourceClaimConsumerReferenceFromJSON)),
    };
}

export function IoK8sApiResourceV1alpha3ResourceClaimStatusToJSON(value?: IoK8sApiResourceV1alpha3ResourceClaimStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allocation': IoK8sApiResourceV1alpha3AllocationResultToJSON(value.allocation),
        'devices': value.devices === undefined ? undefined : ((value.devices as Array<any>).map(IoK8sApiResourceV1alpha3AllocatedDeviceStatusToJSON)),
        'reservedFor': value.reservedFor === undefined ? undefined : ((value.reservedFor as Array<any>).map(IoK8sApiResourceV1alpha3ResourceClaimConsumerReferenceToJSON)),
    };
}

