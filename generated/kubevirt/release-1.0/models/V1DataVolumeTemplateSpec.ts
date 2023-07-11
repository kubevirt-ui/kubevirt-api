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
    V1beta1DataVolumeSpec,
    V1beta1DataVolumeSpecFromJSON,
    V1beta1DataVolumeSpecFromJSONTyped,
    V1beta1DataVolumeSpecToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1DataVolumeTemplateSpec
 */
export interface V1DataVolumeTemplateSpec {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DataVolumeTemplateSpec
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DataVolumeTemplateSpec
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1DataVolumeTemplateSpec
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1beta1DataVolumeSpec}
     * @memberof V1DataVolumeTemplateSpec
     */
    spec: V1beta1DataVolumeSpec;
    /**
     * 
     * @type {object}
     * @memberof V1DataVolumeTemplateSpec
     */
    status?: object;
}

export function V1DataVolumeTemplateSpecFromJSON(json: any): V1DataVolumeTemplateSpec {
    return V1DataVolumeTemplateSpecFromJSONTyped(json, false);
}

export function V1DataVolumeTemplateSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DataVolumeTemplateSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1DataVolumeSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function V1DataVolumeTemplateSpecToJSON(value?: V1DataVolumeTemplateSpec | null): any {
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
        'spec': V1beta1DataVolumeSpecToJSON(value.spec),
        'status': value.status,
    };
}
