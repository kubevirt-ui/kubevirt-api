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
    V1beta1CPUPreferences,
    V1beta1CPUPreferencesFromJSON,
    V1beta1CPUPreferencesFromJSONTyped,
    V1beta1CPUPreferencesToJSON,
    V1beta1ClockPreferences,
    V1beta1ClockPreferencesFromJSON,
    V1beta1ClockPreferencesFromJSONTyped,
    V1beta1ClockPreferencesToJSON,
    V1beta1DevicePreferences,
    V1beta1DevicePreferencesFromJSON,
    V1beta1DevicePreferencesFromJSONTyped,
    V1beta1DevicePreferencesToJSON,
    V1beta1FeaturePreferences,
    V1beta1FeaturePreferencesFromJSON,
    V1beta1FeaturePreferencesFromJSONTyped,
    V1beta1FeaturePreferencesToJSON,
    V1beta1FirmwarePreferences,
    V1beta1FirmwarePreferencesFromJSON,
    V1beta1FirmwarePreferencesFromJSONTyped,
    V1beta1FirmwarePreferencesToJSON,
    V1beta1MachinePreferences,
    V1beta1MachinePreferencesFromJSON,
    V1beta1MachinePreferencesFromJSONTyped,
    V1beta1MachinePreferencesToJSON,
    V1beta1PreferenceRequirements,
    V1beta1PreferenceRequirementsFromJSON,
    V1beta1PreferenceRequirementsFromJSONTyped,
    V1beta1PreferenceRequirementsToJSON,
    V1beta1VolumePreferences,
    V1beta1VolumePreferencesFromJSON,
    V1beta1VolumePreferencesFromJSONTyped,
    V1beta1VolumePreferencesToJSON,
} from './';

/**
 * VirtualMachinePreferenceSpec is a description of the VirtualMachinePreference or VirtualMachineClusterPreference.
 * @export
 * @interface V1beta1VirtualMachinePreferenceSpec
 */
export interface V1beta1VirtualMachinePreferenceSpec {
    /**
     * Optionally defines preferred Annotations to be applied to the VirtualMachineInstance
     * @type {{ [key: string]: string; }}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {V1beta1ClockPreferences}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    clock?: V1beta1ClockPreferences;
    /**
     * 
     * @type {V1beta1CPUPreferences}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    cpu?: V1beta1CPUPreferences;
    /**
     * 
     * @type {V1beta1DevicePreferences}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    devices?: V1beta1DevicePreferences;
    /**
     * 
     * @type {V1beta1FeaturePreferences}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    features?: V1beta1FeaturePreferences;
    /**
     * 
     * @type {V1beta1FirmwarePreferences}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    firmware?: V1beta1FirmwarePreferences;
    /**
     * 
     * @type {V1beta1MachinePreferences}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    machine?: V1beta1MachinePreferences;
    /**
     * PreferSpreadSocketToCoreRatio defines the ratio to spread vCPUs between cores and sockets, it defaults to 2.
     * @type {number}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    preferSpreadSocketToCoreRatio?: number;
    /**
     * Subdomain of the VirtualMachineInstance
     * @type {string}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    preferredSubdomain?: string;
    /**
     * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
     * @type {number}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    preferredTerminationGracePeriodSeconds?: number;
    /**
     * 
     * @type {V1beta1PreferenceRequirements}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    requirements?: V1beta1PreferenceRequirements;
    /**
     * 
     * @type {V1beta1VolumePreferences}
     * @memberof V1beta1VirtualMachinePreferenceSpec
     */
    volumes?: V1beta1VolumePreferences;
}

export function V1beta1VirtualMachinePreferenceSpecFromJSON(json: any): V1beta1VirtualMachinePreferenceSpec {
    return V1beta1VirtualMachinePreferenceSpecFromJSONTyped(json, false);
}

export function V1beta1VirtualMachinePreferenceSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachinePreferenceSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotations': !exists(json, 'annotations') ? undefined : json['annotations'],
        'clock': !exists(json, 'clock') ? undefined : V1beta1ClockPreferencesFromJSON(json['clock']),
        'cpu': !exists(json, 'cpu') ? undefined : V1beta1CPUPreferencesFromJSON(json['cpu']),
        'devices': !exists(json, 'devices') ? undefined : V1beta1DevicePreferencesFromJSON(json['devices']),
        'features': !exists(json, 'features') ? undefined : V1beta1FeaturePreferencesFromJSON(json['features']),
        'firmware': !exists(json, 'firmware') ? undefined : V1beta1FirmwarePreferencesFromJSON(json['firmware']),
        'machine': !exists(json, 'machine') ? undefined : V1beta1MachinePreferencesFromJSON(json['machine']),
        'preferSpreadSocketToCoreRatio': !exists(json, 'preferSpreadSocketToCoreRatio') ? undefined : json['preferSpreadSocketToCoreRatio'],
        'preferredSubdomain': !exists(json, 'preferredSubdomain') ? undefined : json['preferredSubdomain'],
        'preferredTerminationGracePeriodSeconds': !exists(json, 'preferredTerminationGracePeriodSeconds') ? undefined : json['preferredTerminationGracePeriodSeconds'],
        'requirements': !exists(json, 'requirements') ? undefined : V1beta1PreferenceRequirementsFromJSON(json['requirements']),
        'volumes': !exists(json, 'volumes') ? undefined : V1beta1VolumePreferencesFromJSON(json['volumes']),
    };
}

export function V1beta1VirtualMachinePreferenceSpecToJSON(value?: V1beta1VirtualMachinePreferenceSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotations': value.annotations,
        'clock': V1beta1ClockPreferencesToJSON(value.clock),
        'cpu': V1beta1CPUPreferencesToJSON(value.cpu),
        'devices': V1beta1DevicePreferencesToJSON(value.devices),
        'features': V1beta1FeaturePreferencesToJSON(value.features),
        'firmware': V1beta1FirmwarePreferencesToJSON(value.firmware),
        'machine': V1beta1MachinePreferencesToJSON(value.machine),
        'preferSpreadSocketToCoreRatio': value.preferSpreadSocketToCoreRatio,
        'preferredSubdomain': value.preferredSubdomain,
        'preferredTerminationGracePeriodSeconds': value.preferredTerminationGracePeriodSeconds,
        'requirements': V1beta1PreferenceRequirementsToJSON(value.requirements),
        'volumes': V1beta1VolumePreferencesToJSON(value.volumes),
    };
}

