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
 * 
 * @export
 * @interface V1LunTarget
 */
export interface V1LunTarget {
    /**
     * Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi.
     * @type {string}
     * @memberof V1LunTarget
     */
    bus?: string;
    /**
     * ReadOnly. Defaults to false.
     * @type {boolean}
     * @memberof V1LunTarget
     */
    readonly?: boolean;
    /**
     * Reservation indicates if the disk needs to support the persistent reservation for the SCSI disk
     * @type {boolean}
     * @memberof V1LunTarget
     */
    reservation?: boolean;
}

export function V1LunTargetFromJSON(json: any): V1LunTarget {
    return V1LunTargetFromJSONTyped(json, false);
}

export function V1LunTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LunTarget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bus': !exists(json, 'bus') ? undefined : json['bus'],
        'readonly': !exists(json, 'readonly') ? undefined : json['readonly'],
        'reservation': !exists(json, 'reservation') ? undefined : json['reservation'],
    };
}

export function V1LunTargetToJSON(value?: V1LunTarget | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bus': value.bus,
        'readonly': value.readonly,
        'reservation': value.reservation,
    };
}

