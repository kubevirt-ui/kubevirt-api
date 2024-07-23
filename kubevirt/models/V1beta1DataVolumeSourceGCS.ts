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
 * DataVolumeSourceGCS provides the parameters to create a Data Volume from an GCS source
 * @export
 * @interface V1beta1DataVolumeSourceGCS
 */
export interface V1beta1DataVolumeSourceGCS {
    /**
     * SecretRef provides the secret reference needed to access the GCS source
     * @type {string}
     * @memberof V1beta1DataVolumeSourceGCS
     */
    secretRef?: string;
    /**
     * URL is the url of the GCS source
     * @type {string}
     * @memberof V1beta1DataVolumeSourceGCS
     */
    url: string;
}

export function V1beta1DataVolumeSourceGCSFromJSON(json: any): V1beta1DataVolumeSourceGCS {
    return V1beta1DataVolumeSourceGCSFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceGCSFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1DataVolumeSourceGCS {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secretRef': !exists(json, 'secretRef') ? undefined : json['secretRef'],
        'url': json['url'],
    };
}

export function V1beta1DataVolumeSourceGCSToJSON(value?: V1beta1DataVolumeSourceGCS | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secretRef': value.secretRef,
        'url': value.url,
    };
}

