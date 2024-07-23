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
 * LeaseSpec is a specification of a Lease.
 * @export
 * @interface IoK8sApiCoordinationV1LeaseSpec
 */
export interface IoK8sApiCoordinationV1LeaseSpec {
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {string}
     * @memberof IoK8sApiCoordinationV1LeaseSpec
     */
    acquireTime?: string;
    /**
     * holderIdentity contains the identity of the holder of a current lease.
     * @type {string}
     * @memberof IoK8sApiCoordinationV1LeaseSpec
     */
    holderIdentity?: string;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime.
     * @type {number}
     * @memberof IoK8sApiCoordinationV1LeaseSpec
     */
    leaseDurationSeconds?: number;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     * @type {number}
     * @memberof IoK8sApiCoordinationV1LeaseSpec
     */
    leaseTransitions?: number;
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {string}
     * @memberof IoK8sApiCoordinationV1LeaseSpec
     */
    renewTime?: string;
}

export function IoK8sApiCoordinationV1LeaseSpecFromJSON(json: any): IoK8sApiCoordinationV1LeaseSpec {
    return IoK8sApiCoordinationV1LeaseSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoordinationV1LeaseSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoordinationV1LeaseSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acquireTime': !exists(json, 'acquireTime') ? undefined : ((json['acquireTime'])),
        'holderIdentity': !exists(json, 'holderIdentity') ? undefined : json['holderIdentity'],
        'leaseDurationSeconds': !exists(json, 'leaseDurationSeconds') ? undefined : json['leaseDurationSeconds'],
        'leaseTransitions': !exists(json, 'leaseTransitions') ? undefined : json['leaseTransitions'],
        'renewTime': !exists(json, 'renewTime') ? undefined : ((json['renewTime'])),
    };
}

export function IoK8sApiCoordinationV1LeaseSpecToJSON(value?: IoK8sApiCoordinationV1LeaseSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acquireTime': value.acquireTime === undefined ? undefined : (value.acquireTime),
        'holderIdentity': value.holderIdentity,
        'leaseDurationSeconds': value.leaseDurationSeconds,
        'leaseTransitions': value.leaseTransitions,
        'renewTime': value.renewTime === undefined ? undefined : (value.renewTime),
    };
}

