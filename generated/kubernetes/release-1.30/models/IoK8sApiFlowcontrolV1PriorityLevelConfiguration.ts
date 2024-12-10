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
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecFromJSON,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecFromJSONTyped,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecToJSON,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusFromJSON,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusFromJSONTyped,
    IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 * @export
 * @interface IoK8sApiFlowcontrolV1PriorityLevelConfiguration
 */
export interface IoK8sApiFlowcontrolV1PriorityLevelConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfiguration
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfiguration
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec}
     * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfiguration
     */
    spec?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus}
     * @memberof IoK8sApiFlowcontrolV1PriorityLevelConfiguration
     */
    status?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus;
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationFromJSON(json: any): IoK8sApiFlowcontrolV1PriorityLevelConfiguration {
    return IoK8sApiFlowcontrolV1PriorityLevelConfigurationFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1PriorityLevelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusFromJSON(json['status']),
    };
}

export function IoK8sApiFlowcontrolV1PriorityLevelConfigurationToJSON(value?: IoK8sApiFlowcontrolV1PriorityLevelConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecToJSON(value.spec),
        'status': IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusToJSON(value.status),
    };
}
