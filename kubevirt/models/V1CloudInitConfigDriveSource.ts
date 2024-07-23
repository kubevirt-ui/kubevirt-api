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
    K8sIoApiCoreV1LocalObjectReference,
    K8sIoApiCoreV1LocalObjectReferenceFromJSON,
    K8sIoApiCoreV1LocalObjectReferenceFromJSONTyped,
    K8sIoApiCoreV1LocalObjectReferenceToJSON,
} from './';

/**
 * Represents a cloud-init config drive user data source. More info: https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html
 * @export
 * @interface V1CloudInitConfigDriveSource
 */
export interface V1CloudInitConfigDriveSource {
    /**
     * NetworkData contains config drive inline cloud-init networkdata.
     * @type {string}
     * @memberof V1CloudInitConfigDriveSource
     */
    networkData?: string;
    /**
     * NetworkDataBase64 contains config drive cloud-init networkdata as a base64 encoded string.
     * @type {string}
     * @memberof V1CloudInitConfigDriveSource
     */
    networkDataBase64?: string;
    /**
     * 
     * @type {K8sIoApiCoreV1LocalObjectReference}
     * @memberof V1CloudInitConfigDriveSource
     */
    networkDataSecretRef?: K8sIoApiCoreV1LocalObjectReference;
    /**
     * 
     * @type {K8sIoApiCoreV1LocalObjectReference}
     * @memberof V1CloudInitConfigDriveSource
     */
    secretRef?: K8sIoApiCoreV1LocalObjectReference;
    /**
     * UserData contains config drive inline cloud-init userdata.
     * @type {string}
     * @memberof V1CloudInitConfigDriveSource
     */
    userData?: string;
    /**
     * UserDataBase64 contains config drive cloud-init userdata as a base64 encoded string.
     * @type {string}
     * @memberof V1CloudInitConfigDriveSource
     */
    userDataBase64?: string;
}

export function V1CloudInitConfigDriveSourceFromJSON(json: any): V1CloudInitConfigDriveSource {
    return V1CloudInitConfigDriveSourceFromJSONTyped(json, false);
}

export function V1CloudInitConfigDriveSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1CloudInitConfigDriveSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'networkData': !exists(json, 'networkData') ? undefined : json['networkData'],
        'networkDataBase64': !exists(json, 'networkDataBase64') ? undefined : json['networkDataBase64'],
        'networkDataSecretRef': !exists(json, 'networkDataSecretRef') ? undefined : K8sIoApiCoreV1LocalObjectReferenceFromJSON(json['networkDataSecretRef']),
        'secretRef': !exists(json, 'secretRef') ? undefined : K8sIoApiCoreV1LocalObjectReferenceFromJSON(json['secretRef']),
        'userData': !exists(json, 'userData') ? undefined : json['userData'],
        'userDataBase64': !exists(json, 'userDataBase64') ? undefined : json['userDataBase64'],
    };
}

export function V1CloudInitConfigDriveSourceToJSON(value?: V1CloudInitConfigDriveSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'networkData': value.networkData,
        'networkDataBase64': value.networkDataBase64,
        'networkDataSecretRef': K8sIoApiCoreV1LocalObjectReferenceToJSON(value.networkDataSecretRef),
        'secretRef': K8sIoApiCoreV1LocalObjectReferenceToJSON(value.secretRef),
        'userData': value.userData,
        'userDataBase64': value.userDataBase64,
    };
}

