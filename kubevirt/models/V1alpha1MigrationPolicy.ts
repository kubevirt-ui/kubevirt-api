/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
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
    K8sIoApimachineryPkgApisMetaV1ObjectMeta,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    V1alpha1MigrationPolicySpec,
    V1alpha1MigrationPolicySpecFromJSON,
    V1alpha1MigrationPolicySpecFromJSONTyped,
    V1alpha1MigrationPolicySpecToJSON,
} from './';

/**
 * MigrationPolicy holds migration policy (i.e. configurations) to apply to a VM or group of VMs
 * @export
 * @interface V1alpha1MigrationPolicy
 */
export interface V1alpha1MigrationPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1MigrationPolicy
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1MigrationPolicy
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1MigrationPolicy
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1alpha1MigrationPolicySpec}
     * @memberof V1alpha1MigrationPolicy
     */
    spec: V1alpha1MigrationPolicySpec;
    /**
     * 
     * @type {object}
     * @memberof V1alpha1MigrationPolicy
     */
    status?: object;
}

export function V1alpha1MigrationPolicyFromJSON(json: any): V1alpha1MigrationPolicy {
    return V1alpha1MigrationPolicyFromJSONTyped(json, false);
}

export function V1alpha1MigrationPolicyFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1MigrationPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1MigrationPolicySpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function V1alpha1MigrationPolicyToJSON(value?: V1alpha1MigrationPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': V1alpha1MigrationPolicySpecToJSON(value.spec),
        'status': value.status,
    };
}

