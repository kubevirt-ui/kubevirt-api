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
    IoK8sApiResourceV1alpha2ResourceClaimSpec,
    IoK8sApiResourceV1alpha2ResourceClaimSpecFromJSON,
    IoK8sApiResourceV1alpha2ResourceClaimSpecFromJSONTyped,
    IoK8sApiResourceV1alpha2ResourceClaimSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 * @export
 * @interface IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec
 */
export interface IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec {
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiResourceV1alpha2ResourceClaimSpec}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec
     */
    spec: IoK8sApiResourceV1alpha2ResourceClaimSpec;
}

export function IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecFromJSON(json: any): IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec {
    return IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': IoK8sApiResourceV1alpha2ResourceClaimSpecFromJSON(json['spec']),
    };
}

export function IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecToJSON(value?: IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiResourceV1alpha2ResourceClaimSpecToJSON(value.spec),
    };
}

