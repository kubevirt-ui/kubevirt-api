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
    K8sIoApimachineryPkgApisMetaV1LabelSelector,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
    V1ArchConfiguration,
    V1ArchConfigurationFromJSON,
    V1ArchConfigurationFromJSONTyped,
    V1ArchConfigurationToJSON,
    V1CommonInstancetypesDeployment,
    V1CommonInstancetypesDeploymentFromJSON,
    V1CommonInstancetypesDeploymentFromJSONTyped,
    V1CommonInstancetypesDeploymentToJSON,
    V1DeveloperConfiguration,
    V1DeveloperConfigurationFromJSON,
    V1DeveloperConfigurationFromJSONTyped,
    V1DeveloperConfigurationToJSON,
    V1InstancetypeConfiguration,
    V1InstancetypeConfigurationFromJSON,
    V1InstancetypeConfigurationFromJSONTyped,
    V1InstancetypeConfigurationToJSON,
    V1KSMConfiguration,
    V1KSMConfigurationFromJSON,
    V1KSMConfigurationFromJSONTyped,
    V1KSMConfigurationToJSON,
    V1LiveUpdateConfiguration,
    V1LiveUpdateConfigurationFromJSON,
    V1LiveUpdateConfigurationFromJSONTyped,
    V1LiveUpdateConfigurationToJSON,
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
    V1SeccompConfiguration,
    V1SeccompConfigurationFromJSON,
    V1SeccompConfigurationFromJSONTyped,
    V1SeccompConfigurationToJSON,
    V1SupportContainerResources,
    V1SupportContainerResourcesFromJSON,
    V1SupportContainerResourcesFromJSONTyped,
    V1SupportContainerResourcesToJSON,
    V1TLSConfiguration,
    V1TLSConfigurationFromJSON,
    V1TLSConfigurationFromJSONTyped,
    V1TLSConfigurationToJSON,
    V1VirtualMachineOptions,
    V1VirtualMachineOptionsFromJSON,
    V1VirtualMachineOptionsFromJSONTyped,
    V1VirtualMachineOptionsToJSON,
} from './';

/**
 * KubeVirtConfiguration holds all kubevirt configurations
 * @export
 * @interface V1KubeVirtConfiguration
 */
export interface V1KubeVirtConfiguration {
    /**
     * AdditionalGuestMemoryOverheadRatio can be used to increase the virtualization infrastructure overhead. This is useful, since the calculation of this overhead is not accurate and cannot be entirely known in advance. The ratio that is being set determines by which factor to increase the overhead calculated by Kubevirt. A higher ratio means that the VMs would be less compromised by node pressures, but would mean that fewer VMs could be scheduled to a node. If not set, the default is 1.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    additionalGuestMemoryOverheadRatio?: string;
    /**
     * 
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    apiConfiguration?: V1ReloadableComponentConfiguration;
    /**
     * 
     * @type {V1ArchConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    architectureConfiguration?: V1ArchConfiguration;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof V1KubeVirtConfiguration
     */
    autoCPULimitNamespaceLabelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {V1CommonInstancetypesDeployment}
     * @memberof V1KubeVirtConfiguration
     */
    commonInstancetypesDeployment?: V1CommonInstancetypesDeployment;
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
     * ``` <quantity>        ::= <signedNumber><suffix>
     * 
     * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * 
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     * 
     * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * 
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     * 
     * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * 
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
     * 
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     * 
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     * 
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     * 
     * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
     * 
     * The sign will be omitted unless the number is negative.
     * 
     * Examples:
     * 
     * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
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
     * Deprecated. Use architectureConfiguration instead.
     * @type {Array<string>}
     * @memberof V1KubeVirtConfiguration
     */
    emulatedMachines?: Array<string>;
    /**
     * EvictionStrategy defines at the cluster level if the VirtualMachineInstance should be migrated instead of shut-off in case of a node drain. If the VirtualMachineInstance specific field is set it overrides the cluster level one.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    evictionStrategy?: string;
    /**
     * 
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    handlerConfiguration?: V1ReloadableComponentConfiguration;
    /**
     * Possible enum values:
     *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
     *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
     *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    imagePullPolicy?: V1KubeVirtConfigurationImagePullPolicyEnum;
    /**
     * 
     * @type {V1InstancetypeConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    instancetype?: V1InstancetypeConfiguration;
    /**
     * 
     * @type {V1KSMConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    ksmConfiguration?: V1KSMConfiguration;
    /**
     * 
     * @type {V1LiveUpdateConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    liveUpdateConfiguration?: V1LiveUpdateConfiguration;
    /**
     * Deprecated. Use architectureConfiguration instead.
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
     * Deprecated. Use architectureConfiguration instead.
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
     * @type {V1SeccompConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    seccompConfiguration?: V1SeccompConfiguration;
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
     * SupportContainerResources specifies the resource requirements for various types of supporting containers such as container disks/virtiofs/sidecars and hotplug attachment pods. If omitted a sensible default will be supplied.
     * @type {Array<V1SupportContainerResources>}
     * @memberof V1KubeVirtConfiguration
     */
    supportContainerResources?: Array<V1SupportContainerResources>;
    /**
     * deprecated
     * @type {Array<string>}
     * @memberof V1KubeVirtConfiguration
     */
    supportedGuestAgentVersions?: Array<string>;
    /**
     * 
     * @type {V1TLSConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    tlsConfiguration?: V1TLSConfiguration;
    /**
     * 
     * @type {number}
     * @memberof V1KubeVirtConfiguration
     */
    virtualMachineInstancesPerNode?: number;
    /**
     * 
     * @type {V1VirtualMachineOptions}
     * @memberof V1KubeVirtConfiguration
     */
    virtualMachineOptions?: V1VirtualMachineOptions;
    /**
     * VMRolloutStrategy defines how live-updatable fields, like CPU sockets, memory, tolerations, and affinity, are propagated from a VM to its VMI.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    vmRolloutStrategy?: string;
    /**
     * VMStateStorageClass is the name of the storage class to use for the PVCs created to preserve VM state, like TPM. The storage class must support RWX in filesystem mode.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    vmStateStorageClass?: string;
    /**
     * 
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    webhookConfiguration?: V1ReloadableComponentConfiguration;
}

/**
* @export
* @enum {string}
*/
export enum V1KubeVirtConfigurationImagePullPolicyEnum {
    Always = 'Always',
    IfNotPresent = 'IfNotPresent',
    Never = 'Never'
}

export function V1KubeVirtConfigurationFromJSON(json: any): V1KubeVirtConfiguration {
    return V1KubeVirtConfigurationFromJSONTyped(json, false);
}

export function V1KubeVirtConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KubeVirtConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalGuestMemoryOverheadRatio': !exists(json, 'additionalGuestMemoryOverheadRatio') ? undefined : json['additionalGuestMemoryOverheadRatio'],
        'apiConfiguration': !exists(json, 'apiConfiguration') ? undefined : V1ReloadableComponentConfigurationFromJSON(json['apiConfiguration']),
        'architectureConfiguration': !exists(json, 'architectureConfiguration') ? undefined : V1ArchConfigurationFromJSON(json['architectureConfiguration']),
        'autoCPULimitNamespaceLabelSelector': !exists(json, 'autoCPULimitNamespaceLabelSelector') ? undefined : K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['autoCPULimitNamespaceLabelSelector']),
        'commonInstancetypesDeployment': !exists(json, 'commonInstancetypesDeployment') ? undefined : V1CommonInstancetypesDeploymentFromJSON(json['commonInstancetypesDeployment']),
        'controllerConfiguration': !exists(json, 'controllerConfiguration') ? undefined : V1ReloadableComponentConfigurationFromJSON(json['controllerConfiguration']),
        'cpuModel': !exists(json, 'cpuModel') ? undefined : json['cpuModel'],
        'cpuRequest': !exists(json, 'cpuRequest') ? undefined : json['cpuRequest'],
        'defaultRuntimeClass': !exists(json, 'defaultRuntimeClass') ? undefined : json['defaultRuntimeClass'],
        'developerConfiguration': !exists(json, 'developerConfiguration') ? undefined : V1DeveloperConfigurationFromJSON(json['developerConfiguration']),
        'emulatedMachines': !exists(json, 'emulatedMachines') ? undefined : json['emulatedMachines'],
        'evictionStrategy': !exists(json, 'evictionStrategy') ? undefined : json['evictionStrategy'],
        'handlerConfiguration': !exists(json, 'handlerConfiguration') ? undefined : V1ReloadableComponentConfigurationFromJSON(json['handlerConfiguration']),
        'imagePullPolicy': !exists(json, 'imagePullPolicy') ? undefined : json['imagePullPolicy'],
        'instancetype': !exists(json, 'instancetype') ? undefined : V1InstancetypeConfigurationFromJSON(json['instancetype']),
        'ksmConfiguration': !exists(json, 'ksmConfiguration') ? undefined : V1KSMConfigurationFromJSON(json['ksmConfiguration']),
        'liveUpdateConfiguration': !exists(json, 'liveUpdateConfiguration') ? undefined : V1LiveUpdateConfigurationFromJSON(json['liveUpdateConfiguration']),
        'machineType': !exists(json, 'machineType') ? undefined : json['machineType'],
        'mediatedDevicesConfiguration': !exists(json, 'mediatedDevicesConfiguration') ? undefined : V1MediatedDevicesConfigurationFromJSON(json['mediatedDevicesConfiguration']),
        'memBalloonStatsPeriod': !exists(json, 'memBalloonStatsPeriod') ? undefined : json['memBalloonStatsPeriod'],
        'migrations': !exists(json, 'migrations') ? undefined : V1MigrationConfigurationFromJSON(json['migrations']),
        'minCPUModel': !exists(json, 'minCPUModel') ? undefined : json['minCPUModel'],
        'network': !exists(json, 'network') ? undefined : V1NetworkConfigurationFromJSON(json['network']),
        'obsoleteCPUModels': !exists(json, 'obsoleteCPUModels') ? undefined : json['obsoleteCPUModels'],
        'ovmfPath': !exists(json, 'ovmfPath') ? undefined : json['ovmfPath'],
        'permittedHostDevices': !exists(json, 'permittedHostDevices') ? undefined : V1PermittedHostDevicesFromJSON(json['permittedHostDevices']),
        'seccompConfiguration': !exists(json, 'seccompConfiguration') ? undefined : V1SeccompConfigurationFromJSON(json['seccompConfiguration']),
        'selinuxLauncherType': !exists(json, 'selinuxLauncherType') ? undefined : json['selinuxLauncherType'],
        'smbios': !exists(json, 'smbios') ? undefined : V1SMBiosConfigurationFromJSON(json['smbios']),
        'supportContainerResources': !exists(json, 'supportContainerResources') ? undefined : ((json['supportContainerResources'] as Array<any>).map(V1SupportContainerResourcesFromJSON)),
        'supportedGuestAgentVersions': !exists(json, 'supportedGuestAgentVersions') ? undefined : json['supportedGuestAgentVersions'],
        'tlsConfiguration': !exists(json, 'tlsConfiguration') ? undefined : V1TLSConfigurationFromJSON(json['tlsConfiguration']),
        'virtualMachineInstancesPerNode': !exists(json, 'virtualMachineInstancesPerNode') ? undefined : json['virtualMachineInstancesPerNode'],
        'virtualMachineOptions': !exists(json, 'virtualMachineOptions') ? undefined : V1VirtualMachineOptionsFromJSON(json['virtualMachineOptions']),
        'vmRolloutStrategy': !exists(json, 'vmRolloutStrategy') ? undefined : json['vmRolloutStrategy'],
        'vmStateStorageClass': !exists(json, 'vmStateStorageClass') ? undefined : json['vmStateStorageClass'],
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
        
        'additionalGuestMemoryOverheadRatio': value.additionalGuestMemoryOverheadRatio,
        'apiConfiguration': V1ReloadableComponentConfigurationToJSON(value.apiConfiguration),
        'architectureConfiguration': V1ArchConfigurationToJSON(value.architectureConfiguration),
        'autoCPULimitNamespaceLabelSelector': K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value.autoCPULimitNamespaceLabelSelector),
        'commonInstancetypesDeployment': V1CommonInstancetypesDeploymentToJSON(value.commonInstancetypesDeployment),
        'controllerConfiguration': V1ReloadableComponentConfigurationToJSON(value.controllerConfiguration),
        'cpuModel': value.cpuModel,
        'cpuRequest': value.cpuRequest,
        'defaultRuntimeClass': value.defaultRuntimeClass,
        'developerConfiguration': V1DeveloperConfigurationToJSON(value.developerConfiguration),
        'emulatedMachines': value.emulatedMachines,
        'evictionStrategy': value.evictionStrategy,
        'handlerConfiguration': V1ReloadableComponentConfigurationToJSON(value.handlerConfiguration),
        'imagePullPolicy': value.imagePullPolicy,
        'instancetype': V1InstancetypeConfigurationToJSON(value.instancetype),
        'ksmConfiguration': V1KSMConfigurationToJSON(value.ksmConfiguration),
        'liveUpdateConfiguration': V1LiveUpdateConfigurationToJSON(value.liveUpdateConfiguration),
        'machineType': value.machineType,
        'mediatedDevicesConfiguration': V1MediatedDevicesConfigurationToJSON(value.mediatedDevicesConfiguration),
        'memBalloonStatsPeriod': value.memBalloonStatsPeriod,
        'migrations': V1MigrationConfigurationToJSON(value.migrations),
        'minCPUModel': value.minCPUModel,
        'network': V1NetworkConfigurationToJSON(value.network),
        'obsoleteCPUModels': value.obsoleteCPUModels,
        'ovmfPath': value.ovmfPath,
        'permittedHostDevices': V1PermittedHostDevicesToJSON(value.permittedHostDevices),
        'seccompConfiguration': V1SeccompConfigurationToJSON(value.seccompConfiguration),
        'selinuxLauncherType': value.selinuxLauncherType,
        'smbios': V1SMBiosConfigurationToJSON(value.smbios),
        'supportContainerResources': value.supportContainerResources === undefined ? undefined : ((value.supportContainerResources as Array<any>).map(V1SupportContainerResourcesToJSON)),
        'supportedGuestAgentVersions': value.supportedGuestAgentVersions,
        'tlsConfiguration': V1TLSConfigurationToJSON(value.tlsConfiguration),
        'virtualMachineInstancesPerNode': value.virtualMachineInstancesPerNode,
        'virtualMachineOptions': V1VirtualMachineOptionsToJSON(value.virtualMachineOptions),
        'vmRolloutStrategy': value.vmRolloutStrategy,
        'vmStateStorageClass': value.vmStateStorageClass,
        'webhookConfiguration': V1ReloadableComponentConfigurationToJSON(value.webhookConfiguration),
    };
}

