/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
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
 * DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source
 * @export
 * @interface V1beta1DataVolumeSourceImageIO
 */
export interface V1beta1DataVolumeSourceImageIO {
    /**
     * CertConfigMap provides a reference to the CA cert
     * @type {string}
     * @memberof V1beta1DataVolumeSourceImageIO
     */
    certConfigMap?: string;
    /**
     * DiskID provides id of a disk to be imported
     * @type {string}
     * @memberof V1beta1DataVolumeSourceImageIO
     */
    diskId: string;
    /**
     * SecretRef provides the secret reference needed to access the ovirt-engine
     * @type {string}
     * @memberof V1beta1DataVolumeSourceImageIO
     */
    secretRef?: string;
    /**
     * URL is the URL of the ovirt-engine
     * @type {string}
     * @memberof V1beta1DataVolumeSourceImageIO
     */
    url: string;
}

export function V1beta1DataVolumeSourceImageIOFromJSON(json: any): V1beta1DataVolumeSourceImageIO {
    return V1beta1DataVolumeSourceImageIOFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceImageIOFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1DataVolumeSourceImageIO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certConfigMap': !exists(json, 'certConfigMap') ? undefined : json['certConfigMap'],
        'diskId': json['diskId'],
        'secretRef': !exists(json, 'secretRef') ? undefined : json['secretRef'],
        'url': json['url'],
    };
}

export function V1beta1DataVolumeSourceImageIOToJSON(value?: V1beta1DataVolumeSourceImageIO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certConfigMap': value.certConfigMap,
        'diskId': value.diskId,
        'secretRef': value.secretRef,
        'url': value.url,
    };
}

