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
    IoK8sApiResourceV1alpha2AllocationResult,
    IoK8sApiResourceV1alpha2AllocationResultFromJSON,
    IoK8sApiResourceV1alpha2AllocationResultFromJSONTyped,
    IoK8sApiResourceV1alpha2AllocationResultToJSON,
    IoK8sApiResourceV1alpha2ResourceClaimConsumerReference,
    IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceFromJSON,
    IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceFromJSONTyped,
    IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceToJSON,
} from './';

/**
 * ResourceClaimStatus tracks whether the resource has been allocated and what the resulting attributes are.
 * @export
 * @interface IoK8sApiResourceV1alpha2ResourceClaimStatus
 */
export interface IoK8sApiResourceV1alpha2ResourceClaimStatus {
    /**
     * 
     * @type {IoK8sApiResourceV1alpha2AllocationResult}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimStatus
     */
    allocation?: IoK8sApiResourceV1alpha2AllocationResult;
    /**
     * DeallocationRequested indicates that a ResourceClaim is to be deallocated.
     * 
     * The driver then must deallocate this claim and reset the field together with clearing the Allocation field.
     * 
     * While DeallocationRequested is set, no new consumers may be added to ReservedFor.
     * @type {boolean}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimStatus
     */
    deallocationRequested?: boolean;
    /**
     * DriverName is a copy of the driver name from the ResourceClass at the time when allocation started.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimStatus
     */
    driverName?: string;
    /**
     * ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started.
     * 
     * There can be at most 32 such reservations. This may get increased in the future, but not reduced.
     * @type {Array<IoK8sApiResourceV1alpha2ResourceClaimConsumerReference>}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimStatus
     */
    reservedFor?: Array<IoK8sApiResourceV1alpha2ResourceClaimConsumerReference>;
}

export function IoK8sApiResourceV1alpha2ResourceClaimStatusFromJSON(json: any): IoK8sApiResourceV1alpha2ResourceClaimStatus {
    return IoK8sApiResourceV1alpha2ResourceClaimStatusFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2ResourceClaimStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2ResourceClaimStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allocation': !exists(json, 'allocation') ? undefined : IoK8sApiResourceV1alpha2AllocationResultFromJSON(json['allocation']),
        'deallocationRequested': !exists(json, 'deallocationRequested') ? undefined : json['deallocationRequested'],
        'driverName': !exists(json, 'driverName') ? undefined : json['driverName'],
        'reservedFor': !exists(json, 'reservedFor') ? undefined : ((json['reservedFor'] as Array<any>).map(IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceFromJSON)),
    };
}

export function IoK8sApiResourceV1alpha2ResourceClaimStatusToJSON(value?: IoK8sApiResourceV1alpha2ResourceClaimStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allocation': IoK8sApiResourceV1alpha2AllocationResultToJSON(value.allocation),
        'deallocationRequested': value.deallocationRequested,
        'driverName': value.driverName,
        'reservedFor': value.reservedFor === undefined ? undefined : ((value.reservedFor as Array<any>).map(IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceToJSON)),
    };
}

