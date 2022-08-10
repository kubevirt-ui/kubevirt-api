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
    IoK8sApiCoreV1NamespaceCondition,
    IoK8sApiCoreV1NamespaceConditionFromJSON,
    IoK8sApiCoreV1NamespaceConditionFromJSONTyped,
    IoK8sApiCoreV1NamespaceConditionToJSON,
} from './';

/**
 * NamespaceStatus is information about the current status of a Namespace.
 * @export
 * @interface IoK8sApiCoreV1NamespaceStatus
 */
export interface IoK8sApiCoreV1NamespaceStatus {
    /**
     * Represents the latest available observations of a namespace's current state.
     * @type {Array<IoK8sApiCoreV1NamespaceCondition>}
     * @memberof IoK8sApiCoreV1NamespaceStatus
     */
    conditions?: Array<IoK8sApiCoreV1NamespaceCondition>;
    /**
     * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     * @type {string}
     * @memberof IoK8sApiCoreV1NamespaceStatus
     */
    phase?: string;
}

export function IoK8sApiCoreV1NamespaceStatusFromJSON(json: any): IoK8sApiCoreV1NamespaceStatus {
    return IoK8sApiCoreV1NamespaceStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NamespaceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NamespaceStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiCoreV1NamespaceConditionFromJSON)),
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
    };
}

export function IoK8sApiCoreV1NamespaceStatusToJSON(value?: IoK8sApiCoreV1NamespaceStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiCoreV1NamespaceConditionToJSON)),
        'phase': value.phase,
    };
}

