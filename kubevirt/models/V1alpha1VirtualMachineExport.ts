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
    V1alpha1VirtualMachineExportSpec,
    V1alpha1VirtualMachineExportSpecFromJSON,
    V1alpha1VirtualMachineExportSpecFromJSONTyped,
    V1alpha1VirtualMachineExportSpecToJSON,
    V1alpha1VirtualMachineExportStatus,
    V1alpha1VirtualMachineExportStatusFromJSON,
    V1alpha1VirtualMachineExportStatusFromJSONTyped,
    V1alpha1VirtualMachineExportStatusToJSON,
} from './';

/**
 * VirtualMachineExport defines the operation of exporting a VM source
 * @export
 * @interface V1alpha1VirtualMachineExport
 */
export interface V1alpha1VirtualMachineExport {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachineExport
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachineExport
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1VirtualMachineExport
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1alpha1VirtualMachineExportSpec}
     * @memberof V1alpha1VirtualMachineExport
     */
    spec: V1alpha1VirtualMachineExportSpec;
    /**
     * 
     * @type {V1alpha1VirtualMachineExportStatus}
     * @memberof V1alpha1VirtualMachineExport
     */
    status?: V1alpha1VirtualMachineExportStatus;
}

export function V1alpha1VirtualMachineExportFromJSON(json: any): V1alpha1VirtualMachineExport {
    return V1alpha1VirtualMachineExportFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineExportFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachineExport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1VirtualMachineExportSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1alpha1VirtualMachineExportStatusFromJSON(json['status']),
    };
}

export function V1alpha1VirtualMachineExportToJSON(value?: V1alpha1VirtualMachineExport | null): any {
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
        'spec': V1alpha1VirtualMachineExportSpecToJSON(value.spec),
        'status': V1alpha1VirtualMachineExportStatusToJSON(value.status),
    };
}

