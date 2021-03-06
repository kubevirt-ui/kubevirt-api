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
    V1DeveloperConfiguration,
    V1DeveloperConfigurationFromJSON,
    V1DeveloperConfigurationFromJSONTyped,
    V1DeveloperConfigurationToJSON,
    V1MediatedDevicesConfiguration,
    V1MediatedDevicesConfigurationFromJSON,
    V1MediatedDevicesConfigurationFromJSONTyped,
    V1MediatedDevicesConfigurationToJSON,
    V1MigrationConfiguration,
    V1MigrationConfigurationFromJSON,
    V1MigrationConfigurationFromJSONTyped,
    V1MigrationConfigurationToJSON,
    V1NetworkConfiguration,
    V1NetworkConfigurationFromJSON,
    V1NetworkConfigurationFromJSONTyped,
    V1NetworkConfigurationToJSON,
    V1PermittedHostDevices,
    V1PermittedHostDevicesFromJSON,
    V1PermittedHostDevicesFromJSONTyped,
    V1PermittedHostDevicesToJSON,
    V1ReloadableComponentConfiguration,
    V1ReloadableComponentConfigurationFromJSON,
    V1ReloadableComponentConfigurationFromJSONTyped,
    V1ReloadableComponentConfigurationToJSON,
    V1SMBiosConfiguration,
    V1SMBiosConfigurationFromJSON,
    V1SMBiosConfigurationFromJSONTyped,
    V1SMBiosConfigurationToJSON,
} from './';

/**
 * KubeVirtConfiguration holds all kubevirt configurations
 * @export
 * @interface V1KubeVirtConfiguration
 */
export interface V1KubeVirtConfiguration {
    /**
     * 
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    apiConfiguration?: V1ReloadableComponentConfiguration;
    /**
     * 
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    controllerConfiguration?: V1ReloadableComponentConfiguration;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    cpuModel?: string;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     * 
     * The serialization format is:
     * 
     * <quantity>        ::= <signedNumber><suffix>
     *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
     * 
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     * 
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     * 
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *   a. No precision is lost
     *   b. No fractional digits will be emitted
     *   c. The exponent (or suffix) is as large as possible.
     * The sign will be omitted unless the number is negative.
     * 
     * Examples:
     *   1.5 will be serialized as "1500m"
     *   1.5Gi will be serialized as "1536Mi"
     * 
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     * 
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     * 
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    cpuRequest?: string;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    defaultRuntimeClass?: string;
    /**
     * 
     * @type {V1DeveloperConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    developerConfiguration?: V1DeveloperConfiguration;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1KubeVirtConfiguration
     */
    emulatedMachines?: Array<string>;
    /**
     * 
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    handlerConfiguration?: V1ReloadableComponentConfiguration;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    imagePullPolicy?: string;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    machineType?: string;
    /**
     * 
     * @type {V1MediatedDevicesConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    mediatedDevicesConfiguration?: V1MediatedDevicesConfiguration;
    /**
     * 
     * @type {number}
     * @memberof V1KubeVirtConfiguration
     */
    memBalloonStatsPeriod?: number;
    /**
     * 
     * @type {V1MigrationConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    migrations?: V1MigrationConfiguration;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    minCPUModel?: string;
    /**
     * 
     * @type {V1NetworkConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    network?: V1NetworkConfiguration;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof V1KubeVirtConfiguration
     */
    obsoleteCPUModels?: { [key: string]: boolean; };
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    ovmfPath?: string;
    /**
     * 
     * @type {V1PermittedHostDevices}
     * @memberof V1KubeVirtConfiguration
     */
    permittedHostDevices?: V1PermittedHostDevices;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    selinuxLauncherType?: string;
    /**
     * 
     * @type {V1SMBiosConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    smbios?: V1SMBiosConfiguration;
    /**
     * deprecated
     * @type {Array<string>}
     * @memberof V1KubeVirtConfiguration
     */
    supportedGuestAgentVersions?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof V1KubeVirtConfiguration
     */
    virtualMachineInstancesPerNode?: number;
    /**
     * 
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    webhookConfiguration?: V1ReloadableComponentConfiguration;
}

export function V1KubeVirtConfigurationFromJSON(json: any): V1KubeVirtConfiguration {
    return V1KubeVirtConfigurationFromJSONTyped(json, false);
}

export function V1KubeVirtConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KubeVirtConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiConfiguration': !exists(json, 'apiConfiguration') ? undefined : V1ReloadableComponentConfigurationFromJSON(json['apiConfiguration']),
        'controllerConfiguration': !exists(json, 'controllerConfiguration') ? undefined : V1ReloadableComponentConfigurationFromJSON(json['controllerConfiguration']),
        'cpuModel': !exists(json, 'cpuModel') ? undefined : json['cpuModel'],
        'cpuRequest': !exists(json, 'cpuRequest') ? undefined : json['cpuRequest'],
        'defaultRuntimeClass': !exists(json, 'defaultRuntimeClass') ? undefined : json['defaultRuntimeClass'],
        'developerConfiguration': !exists(json, 'developerConfiguration') ? undefined : V1DeveloperConfigurationFromJSON(json['developerConfiguration']),
        'emulatedMachines': !exists(json, 'emulatedMachines') ? undefined : json['emulatedMachines'],
        'handlerConfiguration': !exists(json, 'handlerConfiguration') ? undefined : V1ReloadableComponentConfigurationFromJSON(json['handlerConfiguration']),
        'imagePullPolicy': !exists(json, 'imagePullPolicy') ? undefined : json['imagePullPolicy'],
        'machineType': !exists(json, 'machineType') ? undefined : json['machineType'],
        'mediatedDevicesConfiguration': !exists(json, 'mediatedDevicesConfiguration') ? undefined : V1MediatedDevicesConfigurationFromJSON(json['mediatedDevicesConfiguration']),
        'memBalloonStatsPeriod': !exists(json, 'memBalloonStatsPeriod') ? undefined : json['memBalloonStatsPeriod'],
        'migrations': !exists(json, 'migrations') ? undefined : V1MigrationConfigurationFromJSON(json['migrations']),
        'minCPUModel': !exists(json, 'minCPUModel') ? undefined : json['minCPUModel'],
        'network': !exists(json, 'network') ? undefined : V1NetworkConfigurationFromJSON(json['network']),
        'obsoleteCPUModels': !exists(json, 'obsoleteCPUModels') ? undefined : json['obsoleteCPUModels'],
        'ovmfPath': !exists(json, 'ovmfPath') ? undefined : json['ovmfPath'],
        'permittedHostDevices': !exists(json, 'permittedHostDevices') ? undefined : V1PermittedHostDevicesFromJSON(json['permittedHostDevices']),
        'selinuxLauncherType': !exists(json, 'selinuxLauncherType') ? undefined : json['selinuxLauncherType'],
        'smbios': !exists(json, 'smbios') ? undefined : V1SMBiosConfigurationFromJSON(json['smbios']),
        'supportedGuestAgentVersions': !exists(json, 'supportedGuestAgentVersions') ? undefined : json['supportedGuestAgentVersions'],
        'virtualMachineInstancesPerNode': !exists(json, 'virtualMachineInstancesPerNode') ? undefined : json['virtualMachineInstancesPerNode'],
        'webhookConfiguration': !exists(json, 'webhookConfiguration') ? undefined : V1ReloadableComponentConfigurationFromJSON(json['webhookConfiguration']),
    };
}

export function V1KubeVirtConfigurationToJSON(value?: V1KubeVirtConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiConfiguration': V1ReloadableComponentConfigurationToJSON(value.apiConfiguration),
        'controllerConfiguration': V1ReloadableComponentConfigurationToJSON(value.controllerConfiguration),
        'cpuModel': value.cpuModel,
        'cpuRequest': value.cpuRequest,
        'defaultRuntimeClass': value.defaultRuntimeClass,
        'developerConfiguration': V1DeveloperConfigurationToJSON(value.developerConfiguration),
        'emulatedMachines': value.emulatedMachines,
        'handlerConfiguration': V1ReloadableComponentConfigurationToJSON(value.handlerConfiguration),
        'imagePullPolicy': value.imagePullPolicy,
        'machineType': value.machineType,
        'mediatedDevicesConfiguration': V1MediatedDevicesConfigurationToJSON(value.mediatedDevicesConfiguration),
        'memBalloonStatsPeriod': value.memBalloonStatsPeriod,
        'migrations': V1MigrationConfigurationToJSON(value.migrations),
        'minCPUModel': value.minCPUModel,
        'network': V1NetworkConfigurationToJSON(value.network),
        'obsoleteCPUModels': value.obsoleteCPUModels,
        'ovmfPath': value.ovmfPath,
        'permittedHostDevices': V1PermittedHostDevicesToJSON(value.permittedHostDevices),
        'selinuxLauncherType': value.selinuxLauncherType,
        'smbios': V1SMBiosConfigurationToJSON(value.smbios),
        'supportedGuestAgentVersions': value.supportedGuestAgentVersions,
        'virtualMachineInstancesPerNode': value.virtualMachineInstancesPerNode,
        'webhookConfiguration': V1ReloadableComponentConfigurationToJSON(value.webhookConfiguration),
    };
}

