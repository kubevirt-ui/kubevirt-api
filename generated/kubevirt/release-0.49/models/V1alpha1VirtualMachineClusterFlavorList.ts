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
    K8sIoApimachineryPkgApisMetaV1ListMeta,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
    V1alpha1VirtualMachineClusterFlavor,
    V1alpha1VirtualMachineClusterFlavorFromJSON,
    V1alpha1VirtualMachineClusterFlavorFromJSONTyped,
    V1alpha1VirtualMachineClusterFlavorToJSON,
} from './';

/**
 * VirtualMachineClusterFlavorList is a list of VirtualMachineClusterFlavor resources.
 * @export
 * @interface V1alpha1VirtualMachineClusterFlavorList
 */
export interface V1alpha1VirtualMachineClusterFlavorList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachineClusterFlavorList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1alpha1VirtualMachineClusterFlavor>}
     * @memberof V1alpha1VirtualMachineClusterFlavorList
     */
    items: Array<V1alpha1VirtualMachineClusterFlavor>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachineClusterFlavorList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1alpha1VirtualMachineClusterFlavorList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

export function V1alpha1VirtualMachineClusterFlavorListFromJSON(json: any): V1alpha1VirtualMachineClusterFlavorList {
    return V1alpha1VirtualMachineClusterFlavorListFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineClusterFlavorListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineClusterFlavorList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1VirtualMachineClusterFlavorFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1VirtualMachineClusterFlavorListToJSON(value?: V1alpha1VirtualMachineClusterFlavorList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1alpha1VirtualMachineClusterFlavorToJSON)),
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

