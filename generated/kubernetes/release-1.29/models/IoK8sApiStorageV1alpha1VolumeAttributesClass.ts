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
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * VolumeAttributesClass represents a specification of mutable volume attributes defined by the CSI driver. The class can be specified during dynamic provisioning of PersistentVolumeClaims, and changed in the PersistentVolumeClaim spec after provisioning.
 * @export
 * @interface IoK8sApiStorageV1alpha1VolumeAttributesClass
 */
export interface IoK8sApiStorageV1alpha1VolumeAttributesClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClass
     */
    apiVersion?: string;
    /**
     * Name of the CSI driver This field is immutable.
     * @type {string}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClass
     */
    driverName: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClass
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClass
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * parameters hold volume attributes defined by the CSI driver. These values are opaque to the Kubernetes and are passed directly to the CSI driver. The underlying storage provider supports changing these attributes on an existing volume, however the parameters field itself is immutable. To invoke a volume update, a new VolumeAttributesClass should be created with new parameters, and the PersistentVolumeClaim should be updated to reference the new VolumeAttributesClass.
     * 
     * This field is required and must contain at least one key/value pair. The keys cannot be empty, and the maximum number of parameters is 512, with a cumulative max size of 256K. If the CSI driver rejects invalid parameters, the target PersistentVolumeClaim will be set to an "Infeasible" state in the modifyVolumeStatus field.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttributesClass
     */
    parameters?: { [key: string]: string; };
}

export function IoK8sApiStorageV1alpha1VolumeAttributesClassFromJSON(json: any): IoK8sApiStorageV1alpha1VolumeAttributesClass {
    return IoK8sApiStorageV1alpha1VolumeAttributesClassFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1alpha1VolumeAttributesClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1alpha1VolumeAttributesClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'driverName': json['driverName'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
    };
}

export function IoK8sApiStorageV1alpha1VolumeAttributesClassToJSON(value?: IoK8sApiStorageV1alpha1VolumeAttributesClass | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'driverName': value.driverName,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'parameters': value.parameters,
    };
}

