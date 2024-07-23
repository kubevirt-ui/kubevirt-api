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
 * QueuingConfiguration holds the configuration parameters for queuing
 * @export
 * @interface IoK8sApiFlowcontrolV1QueuingConfiguration
 */
export interface IoK8sApiFlowcontrolV1QueuingConfiguration {
    /**
     * `handSize` is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8.
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1QueuingConfiguration
     */
    handSize?: number;
    /**
     * `queueLengthLimit` is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50.
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1QueuingConfiguration
     */
    queueLengthLimit?: number;
    /**
     * `queues` is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64.
     * @type {number}
     * @memberof IoK8sApiFlowcontrolV1QueuingConfiguration
     */
    queues?: number;
}

export function IoK8sApiFlowcontrolV1QueuingConfigurationFromJSON(json: any): IoK8sApiFlowcontrolV1QueuingConfiguration {
    return IoK8sApiFlowcontrolV1QueuingConfigurationFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1QueuingConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1QueuingConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'handSize': !exists(json, 'handSize') ? undefined : json['handSize'],
        'queueLengthLimit': !exists(json, 'queueLengthLimit') ? undefined : json['queueLengthLimit'],
        'queues': !exists(json, 'queues') ? undefined : json['queues'],
    };
}

export function IoK8sApiFlowcontrolV1QueuingConfigurationToJSON(value?: IoK8sApiFlowcontrolV1QueuingConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'handSize': value.handSize,
        'queueLengthLimit': value.queueLengthLimit,
        'queues': value.queues,
    };
}

