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
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec,
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecFromJSON,
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecFromJSONTyped,
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecToJSON,
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus,
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusFromJSON,
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusFromJSONTyped,
    IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy
 */
export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec}
     * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy
     */
    spec?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec;
    /**
     * 
     * @type {IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus}
     * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy
     */
    status?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus;
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyFromJSON(json: any): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy {
    return IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyToJSON(value?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy | null): any {
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
        'spec': IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecToJSON(value.spec),
        'status': IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusToJSON(value.status),
    };
}

