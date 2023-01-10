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
    IoK8sApiResourceV1alpha1ResourceClaimParametersReference,
    IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceFromJSON,
    IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceFromJSONTyped,
    IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceToJSON,
} from './';

/**
 * ResourceClaimSpec defines how a resource is to be allocated.
 * @export
 * @interface IoK8sApiResourceV1alpha1ResourceClaimSpec
 */
export interface IoK8sApiResourceV1alpha1ResourceClaimSpec {
    /**
     * Allocation can start immediately or when a Pod wants to use the resource. "WaitForFirstConsumer" is the default.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha1ResourceClaimSpec
     */
    allocationMode?: string;
    /**
     * 
     * @type {IoK8sApiResourceV1alpha1ResourceClaimParametersReference}
     * @memberof IoK8sApiResourceV1alpha1ResourceClaimSpec
     */
    parametersRef?: IoK8sApiResourceV1alpha1ResourceClaimParametersReference;
    /**
     * ResourceClassName references the driver and additional parameters via the name of a ResourceClass that was created as part of the driver deployment.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha1ResourceClaimSpec
     */
    resourceClassName: string;
}

export function IoK8sApiResourceV1alpha1ResourceClaimSpecFromJSON(json: any): IoK8sApiResourceV1alpha1ResourceClaimSpec {
    return IoK8sApiResourceV1alpha1ResourceClaimSpecFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha1ResourceClaimSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha1ResourceClaimSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allocationMode': !exists(json, 'allocationMode') ? undefined : json['allocationMode'],
        'parametersRef': !exists(json, 'parametersRef') ? undefined : IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceFromJSON(json['parametersRef']),
        'resourceClassName': json['resourceClassName'],
    };
}

export function IoK8sApiResourceV1alpha1ResourceClaimSpecToJSON(value?: IoK8sApiResourceV1alpha1ResourceClaimSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allocationMode': value.allocationMode,
        'parametersRef': IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceToJSON(value.parametersRef),
        'resourceClassName': value.resourceClassName,
    };
}
