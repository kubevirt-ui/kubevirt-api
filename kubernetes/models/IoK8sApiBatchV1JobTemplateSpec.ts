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
    IoK8sApiBatchV1JobSpec,
    IoK8sApiBatchV1JobSpecFromJSON,
    IoK8sApiBatchV1JobSpecFromJSONTyped,
    IoK8sApiBatchV1JobSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 * @export
 * @interface IoK8sApiBatchV1JobTemplateSpec
 */
export interface IoK8sApiBatchV1JobTemplateSpec {
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiBatchV1JobTemplateSpec
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiBatchV1JobSpec}
     * @memberof IoK8sApiBatchV1JobTemplateSpec
     */
    spec?: IoK8sApiBatchV1JobSpec;
}

export function IoK8sApiBatchV1JobTemplateSpecFromJSON(json: any): IoK8sApiBatchV1JobTemplateSpec {
    return IoK8sApiBatchV1JobTemplateSpecFromJSONTyped(json, false);
}

export function IoK8sApiBatchV1JobTemplateSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiBatchV1JobTemplateSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiBatchV1JobSpecFromJSON(json['spec']),
    };
}

export function IoK8sApiBatchV1JobTemplateSpecToJSON(value?: IoK8sApiBatchV1JobTemplateSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiBatchV1JobSpecToJSON(value.spec),
    };
}

