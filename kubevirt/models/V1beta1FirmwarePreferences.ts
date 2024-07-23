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
 * FirmwarePreferences contains various optional defaults for Firmware.
 * @export
 * @interface V1beta1FirmwarePreferences
 */
export interface V1beta1FirmwarePreferences {
    /**
     * PreferredUseBios optionally enables BIOS
     * @type {boolean}
     * @memberof V1beta1FirmwarePreferences
     */
    preferredUseBios?: boolean;
    /**
     * PreferredUseBiosSerial optionally transmitts BIOS output over the serial.
     * 
     * Requires PreferredUseBios to be enabled.
     * @type {boolean}
     * @memberof V1beta1FirmwarePreferences
     */
    preferredUseBiosSerial?: boolean;
    /**
     * PreferredUseEfi optionally enables EFI
     * @type {boolean}
     * @memberof V1beta1FirmwarePreferences
     */
    preferredUseEfi?: boolean;
    /**
     * PreferredUseSecureBoot optionally enables SecureBoot and the OVMF roms will be swapped for SecureBoot-enabled ones.
     * 
     * Requires PreferredUseEfi and PreferredSmm to be enabled.
     * @type {boolean}
     * @memberof V1beta1FirmwarePreferences
     */
    preferredUseSecureBoot?: boolean;
}

export function V1beta1FirmwarePreferencesFromJSON(json: any): V1beta1FirmwarePreferences {
    return V1beta1FirmwarePreferencesFromJSONTyped(json, false);
}

export function V1beta1FirmwarePreferencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1FirmwarePreferences {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preferredUseBios': !exists(json, 'preferredUseBios') ? undefined : json['preferredUseBios'],
        'preferredUseBiosSerial': !exists(json, 'preferredUseBiosSerial') ? undefined : json['preferredUseBiosSerial'],
        'preferredUseEfi': !exists(json, 'preferredUseEfi') ? undefined : json['preferredUseEfi'],
        'preferredUseSecureBoot': !exists(json, 'preferredUseSecureBoot') ? undefined : json['preferredUseSecureBoot'],
    };
}

export function V1beta1FirmwarePreferencesToJSON(value?: V1beta1FirmwarePreferences | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preferredUseBios': value.preferredUseBios,
        'preferredUseBiosSerial': value.preferredUseBiosSerial,
        'preferredUseEfi': value.preferredUseEfi,
        'preferredUseSecureBoot': value.preferredUseSecureBoot,
    };
}

