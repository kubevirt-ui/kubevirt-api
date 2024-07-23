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
    V1alpha1VirtualMachinePoolSpec,
    V1alpha1VirtualMachinePoolSpecFromJSON,
    V1alpha1VirtualMachinePoolSpecFromJSONTyped,
    V1alpha1VirtualMachinePoolSpecToJSON,
    V1alpha1VirtualMachinePoolStatus,
    V1alpha1VirtualMachinePoolStatusFromJSON,
    V1alpha1VirtualMachinePoolStatusFromJSONTyped,
    V1alpha1VirtualMachinePoolStatusToJSON,
} from './';

/**
 * VirtualMachinePool resource contains a VirtualMachine configuration that can be used to replicate multiple VirtualMachine resources.
 * @export
 * @interface V1alpha1VirtualMachinePool
 */
export interface V1alpha1VirtualMachinePool {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachinePool
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachinePool
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1VirtualMachinePool
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1alpha1VirtualMachinePoolSpec}
     * @memberof V1alpha1VirtualMachinePool
     */
    spec: V1alpha1VirtualMachinePoolSpec;
    /**
     * 
     * @type {V1alpha1VirtualMachinePoolStatus}
     * @memberof V1alpha1VirtualMachinePool
     */
    status?: V1alpha1VirtualMachinePoolStatus;
}

export function V1alpha1VirtualMachinePoolFromJSON(json: any): V1alpha1VirtualMachinePool {
    return V1alpha1VirtualMachinePoolFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachinePool {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1VirtualMachinePoolSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1alpha1VirtualMachinePoolStatusFromJSON(json['status']),
    };
}

export function V1alpha1VirtualMachinePoolToJSON(value?: V1alpha1VirtualMachinePool | null): any {
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
        'spec': V1alpha1VirtualMachinePoolSpecToJSON(value.spec),
        'status': V1alpha1VirtualMachinePoolStatusToJSON(value.status),
    };
}

