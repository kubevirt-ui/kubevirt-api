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
 * @interface V1alpha2FirmwarePreferences
 */
export interface V1alpha2FirmwarePreferences {
    /**
     * PreferredUseBios optionally enables BIOS
     * @type {boolean}
     * @memberof V1alpha2FirmwarePreferences
     */
    preferredUseBios?: boolean;
    /**
     * PreferredUseBiosSerial optionally transmitts BIOS output over the serial.
     * 
     * Requires PreferredUseBios to be enabled.
     * @type {boolean}
     * @memberof V1alpha2FirmwarePreferences
     */
    preferredUseBiosSerial?: boolean;
    /**
     * PreferredUseEfi optionally enables EFI
     * @type {boolean}
     * @memberof V1alpha2FirmwarePreferences
     */
    preferredUseEfi?: boolean;
    /**
     * PreferredUseSecureBoot optionally enables SecureBoot and the OVMF roms will be swapped for SecureBoot-enabled ones.
     * 
     * Requires PreferredUseEfi and PreferredSmm to be enabled.
     * @type {boolean}
     * @memberof V1alpha2FirmwarePreferences
     */
    preferredUseSecureBoot?: boolean;
}

export function V1alpha2FirmwarePreferencesFromJSON(json: any): V1alpha2FirmwarePreferences {
    return V1alpha2FirmwarePreferencesFromJSONTyped(json, false);
}

export function V1alpha2FirmwarePreferencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha2FirmwarePreferences {
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

export function V1alpha2FirmwarePreferencesToJSON(value?: V1alpha2FirmwarePreferences | null): any {
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
