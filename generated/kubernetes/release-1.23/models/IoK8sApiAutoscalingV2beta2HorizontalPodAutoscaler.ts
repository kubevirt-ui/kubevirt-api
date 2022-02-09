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
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec,
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpecFromJSON,
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpecFromJSONTyped,
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpecToJSON,
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus,
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatusFromJSON,
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatusFromJSONTyped,
    IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 * @export
 * @interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler
 */
export interface IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec}
     * @memberof IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler
     */
    spec?: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus}
     * @memberof IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler
     */
    status?: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus;
}

export function IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerFromJSON(json: any): IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler {
    return IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerToJSON(value?: IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler | null): any {
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
        'spec': IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpecToJSON(value.spec),
        'status': IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatusToJSON(value.status),
    };
}
