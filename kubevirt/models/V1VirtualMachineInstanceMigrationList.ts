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
    V1VirtualMachineInstanceMigration,
    V1VirtualMachineInstanceMigrationFromJSON,
    V1VirtualMachineInstanceMigrationFromJSONTyped,
    V1VirtualMachineInstanceMigrationToJSON,
} from './';

/**
 * VirtualMachineInstanceMigrationList is a list of VirtualMachineMigrations
 * @export
 * @interface V1VirtualMachineInstanceMigrationList
 */
export interface V1VirtualMachineInstanceMigrationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1VirtualMachineInstanceMigration>}
     * @memberof V1VirtualMachineInstanceMigrationList
     */
    items: Array<V1VirtualMachineInstanceMigration>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1VirtualMachineInstanceMigrationList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

export function V1VirtualMachineInstanceMigrationListFromJSON(json: any): V1VirtualMachineInstanceMigrationList {
    return V1VirtualMachineInstanceMigrationListFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceMigrationListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceMigrationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1VirtualMachineInstanceMigrationFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1VirtualMachineInstanceMigrationListToJSON(value?: V1VirtualMachineInstanceMigrationList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1VirtualMachineInstanceMigrationToJSON)),
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

