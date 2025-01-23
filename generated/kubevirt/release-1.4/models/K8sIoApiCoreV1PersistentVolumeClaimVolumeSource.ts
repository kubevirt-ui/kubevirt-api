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
/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 * @export
 * @interface K8sIoApiCoreV1PersistentVolumeClaimVolumeSource
 */
export interface K8sIoApiCoreV1PersistentVolumeClaimVolumeSource {
    /**
     * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     * @type {string}
     * @memberof K8sIoApiCoreV1PersistentVolumeClaimVolumeSource
     */
    claimName: string;
    /**
     * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
     * @type {boolean}
     * @memberof K8sIoApiCoreV1PersistentVolumeClaimVolumeSource
     */
    readOnly?: boolean;
}

export function K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceFromJSON(json: any): K8sIoApiCoreV1PersistentVolumeClaimVolumeSource {
    return K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1PersistentVolumeClaimVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'claimName': json['claimName'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceToJSON(value?: K8sIoApiCoreV1PersistentVolumeClaimVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'claimName': value.claimName,
        'readOnly': value.readOnly,
    };
}

