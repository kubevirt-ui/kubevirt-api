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
    K8sIoApiCoreV1PersistentVolumeClaimSpec,
    K8sIoApiCoreV1PersistentVolumeClaimSpecFromJSON,
    K8sIoApiCoreV1PersistentVolumeClaimSpecFromJSONTyped,
    K8sIoApiCoreV1PersistentVolumeClaimSpecToJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMeta,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1alpha1PersistentVolumeClaim
 */
export interface V1alpha1PersistentVolumeClaim {
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1PersistentVolumeClaim
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {K8sIoApiCoreV1PersistentVolumeClaimSpec}
     * @memberof V1alpha1PersistentVolumeClaim
     */
    spec?: K8sIoApiCoreV1PersistentVolumeClaimSpec;
}

export function V1alpha1PersistentVolumeClaimFromJSON(json: any): V1alpha1PersistentVolumeClaim {
    return V1alpha1PersistentVolumeClaimFromJSONTyped(json, false);
}

export function V1alpha1PersistentVolumeClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1PersistentVolumeClaim {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : K8sIoApiCoreV1PersistentVolumeClaimSpecFromJSON(json['spec']),
    };
}

export function V1alpha1PersistentVolumeClaimToJSON(value?: V1alpha1PersistentVolumeClaim | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': K8sIoApiCoreV1PersistentVolumeClaimSpecToJSON(value.spec),
    };
}

