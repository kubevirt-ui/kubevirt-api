/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
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
    V1StatusCause,
    V1StatusCauseFromJSON,
    V1StatusCauseFromJSONTyped,
    V1StatusCauseToJSON,
} from './';

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 * @export
 * @interface V1StatusDetails
 */
export interface V1StatusDetails {
    /**
     * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
     * @type {Array<V1StatusCause>}
     * @memberof V1StatusDetails
     */
    causes?: Array<V1StatusCause>;
    /**
     * The group attribute of the resource associated with the status StatusReason.
     * @type {string}
     * @memberof V1StatusDetails
     */
    group?: string;
    /**
     * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1StatusDetails
     */
    kind?: string;
    /**
     * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
     * @type {string}
     * @memberof V1StatusDetails
     */
    name?: string;
    /**
     * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
     * @type {number}
     * @memberof V1StatusDetails
     */
    retryAfterSeconds?: number;
    /**
     * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     * @type {string}
     * @memberof V1StatusDetails
     */
    uid?: string;
}

export function V1StatusDetailsFromJSON(json: any): V1StatusDetails {
    return V1StatusDetailsFromJSONTyped(json, false);
}

export function V1StatusDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1StatusDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'causes': !exists(json, 'causes') ? undefined : ((json['causes'] as Array<any>).map(V1StatusCauseFromJSON)),
        'group': !exists(json, 'group') ? undefined : json['group'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'retryAfterSeconds': !exists(json, 'retryAfterSeconds') ? undefined : json['retryAfterSeconds'],
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
    };
}

export function V1StatusDetailsToJSON(value?: V1StatusDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'causes': value.causes === undefined ? undefined : ((value.causes as Array<any>).map(V1StatusCauseToJSON)),
        'group': value.group,
        'kind': value.kind,
        'name': value.name,
        'retryAfterSeconds': value.retryAfterSeconds,
        'uid': value.uid,
    };
}

