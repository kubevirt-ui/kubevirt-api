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
    IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus,
    IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatusFromJSON,
    IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatusFromJSONTyped,
    IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
 * @export
 * @interface IoK8sApiAuthenticationV1beta1SelfSubjectReview
 */
export interface IoK8sApiAuthenticationV1beta1SelfSubjectReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1beta1SelfSubjectReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1beta1SelfSubjectReview
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAuthenticationV1beta1SelfSubjectReview
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus}
     * @memberof IoK8sApiAuthenticationV1beta1SelfSubjectReview
     */
    status?: IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus;
}

export function IoK8sApiAuthenticationV1beta1SelfSubjectReviewFromJSON(json: any): IoK8sApiAuthenticationV1beta1SelfSubjectReview {
    return IoK8sApiAuthenticationV1beta1SelfSubjectReviewFromJSONTyped(json, false);
}

export function IoK8sApiAuthenticationV1beta1SelfSubjectReviewFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAuthenticationV1beta1SelfSubjectReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAuthenticationV1beta1SelfSubjectReviewToJSON(value?: IoK8sApiAuthenticationV1beta1SelfSubjectReview | null): any {
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
        'status': IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatusToJSON(value.status),
    };
}

