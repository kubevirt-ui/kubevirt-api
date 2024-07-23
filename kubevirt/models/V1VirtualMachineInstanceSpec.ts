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
    K8sIoApiCoreV1Affinity,
    K8sIoApiCoreV1AffinityFromJSON,
    K8sIoApiCoreV1AffinityFromJSONTyped,
    K8sIoApiCoreV1AffinityToJSON,
    K8sIoApiCoreV1PodDNSConfig,
    K8sIoApiCoreV1PodDNSConfigFromJSON,
    K8sIoApiCoreV1PodDNSConfigFromJSONTyped,
    K8sIoApiCoreV1PodDNSConfigToJSON,
    K8sIoApiCoreV1Toleration,
    K8sIoApiCoreV1TolerationFromJSON,
    K8sIoApiCoreV1TolerationFromJSONTyped,
    K8sIoApiCoreV1TolerationToJSON,
    K8sIoApiCoreV1TopologySpreadConstraint,
    K8sIoApiCoreV1TopologySpreadConstraintFromJSON,
    K8sIoApiCoreV1TopologySpreadConstraintFromJSONTyped,
    K8sIoApiCoreV1TopologySpreadConstraintToJSON,
    V1AccessCredential,
    V1AccessCredentialFromJSON,
    V1AccessCredentialFromJSONTyped,
    V1AccessCredentialToJSON,
    V1DomainSpec,
    V1DomainSpecFromJSON,
    V1DomainSpecFromJSONTyped,
    V1DomainSpecToJSON,
    V1Network,
    V1NetworkFromJSON,
    V1NetworkFromJSONTyped,
    V1NetworkToJSON,
    V1Probe,
    V1ProbeFromJSON,
    V1ProbeFromJSONTyped,
    V1ProbeToJSON,
    V1Volume,
    V1VolumeFromJSON,
    V1VolumeFromJSONTyped,
    V1VolumeToJSON,
} from './';

/**
 * VirtualMachineInstanceSpec is a description of a VirtualMachineInstance.
 * @export
 * @interface V1VirtualMachineInstanceSpec
 */
export interface V1VirtualMachineInstanceSpec {
    /**
     * Specifies a set of public keys to inject into the vm guest
     * @type {Array<V1AccessCredential>}
     * @memberof V1VirtualMachineInstanceSpec
     */
    accessCredentials?: Array<V1AccessCredential>;
    /**
     * 
     * @type {K8sIoApiCoreV1Affinity}
     * @memberof V1VirtualMachineInstanceSpec
     */
    affinity?: K8sIoApiCoreV1Affinity;
    /**
     * Specifies the architecture of the vm guest you are attempting to run. Defaults to the compiled architecture of the KubeVirt components
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    architecture?: string;
    /**
     * 
     * @type {K8sIoApiCoreV1PodDNSConfig}
     * @memberof V1VirtualMachineInstanceSpec
     */
    dnsConfig?: K8sIoApiCoreV1PodDNSConfig;
    /**
     * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
     * 
     * Possible enum values:
     *  - `"ClusterFirst"` indicates that the pod should use cluster DNS first unless hostNetwork is true, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
     *  - `"ClusterFirstWithHostNet"` indicates that the pod should use cluster DNS first, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
     *  - `"Default"` indicates that the pod should use the default (as determined by kubelet) DNS settings.
     *  - `"None"` indicates that the pod should use empty DNS settings. DNS parameters such as nameservers and search paths should be defined via DNSConfig.
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    dnsPolicy?: V1VirtualMachineInstanceSpecDnsPolicyEnum;
    /**
     * 
     * @type {V1DomainSpec}
     * @memberof V1VirtualMachineInstanceSpec
     */
    domain: V1DomainSpec;
    /**
     * EvictionStrategy describes the strategy to follow when a node drain occurs. The possible options are: - "None": No action will be taken, according to the specified 'RunStrategy' the VirtualMachine will be restarted or shutdown. - "LiveMigrate": the VirtualMachineInstance will be migrated instead of being shutdown. - "LiveMigrateIfPossible": the same as "LiveMigrate" but only if the VirtualMachine is Live-Migratable, otherwise it will behave as "None". - "External": the VirtualMachineInstance will be protected by a PDB and `vmi.Status.EvacuationNodeName` will be set on eviction. This is mainly useful for cluster-api-provider-kubevirt (capk) which needs a way for VMI's to be blocked from eviction, yet signal capk that eviction has been called on the VMI so the capk controller can handle tearing the VMI down. Details can be found in the commit description https://github.com/kubevirt/kubevirt/commit/c1d77face705c8b126696bac9a3ee3825f27f1fa.
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    evictionStrategy?: string;
    /**
     * Specifies the hostname of the vmi If not specified, the hostname will be set to the name of the vmi, if dhcp or cloud-init is configured properly.
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    hostname?: string;
    /**
     * 
     * @type {V1Probe}
     * @memberof V1VirtualMachineInstanceSpec
     */
    livenessProbe?: V1Probe;
    /**
     * List of networks that can be attached to a vm's virtual interface.
     * @type {Array<V1Network>}
     * @memberof V1VirtualMachineInstanceSpec
     */
    networks?: Array<V1Network>;
    /**
     * NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node's labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     * @type {{ [key: string]: string; }}
     * @memberof V1VirtualMachineInstanceSpec
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * If specified, indicates the pod's priority. If not specified, the pod priority will be default or zero if there is no default.
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    priorityClassName?: string;
    /**
     * 
     * @type {V1Probe}
     * @memberof V1VirtualMachineInstanceSpec
     */
    readinessProbe?: V1Probe;
    /**
     * If specified, the VMI will be dispatched by specified scheduler. If not specified, the VMI will be dispatched by default scheduler.
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    schedulerName?: string;
    /**
     * StartStrategy can be set to "Paused" if Virtual Machine should be started in paused state.
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    startStrategy?: string;
    /**
     * If specified, the fully qualified vmi hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the vmi will not have a domainname at all. The DNS entry will resolve to the vmi, no matter if the vmi itself can pick up a hostname.
     * @type {string}
     * @memberof V1VirtualMachineInstanceSpec
     */
    subdomain?: string;
    /**
     * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
     * @type {number}
     * @memberof V1VirtualMachineInstanceSpec
     */
    terminationGracePeriodSeconds?: number;
    /**
     * If toleration is specified, obey all the toleration rules.
     * @type {Array<K8sIoApiCoreV1Toleration>}
     * @memberof V1VirtualMachineInstanceSpec
     */
    tolerations?: Array<K8sIoApiCoreV1Toleration>;
    /**
     * TopologySpreadConstraints describes how a group of VMIs will be spread across a given topology domains. K8s scheduler will schedule VMI pods in a way which abides by the constraints.
     * @type {Array<K8sIoApiCoreV1TopologySpreadConstraint>}
     * @memberof V1VirtualMachineInstanceSpec
     */
    topologySpreadConstraints?: Array<K8sIoApiCoreV1TopologySpreadConstraint>;
    /**
     * List of volumes that can be mounted by disks belonging to the vmi.
     * @type {Array<V1Volume>}
     * @memberof V1VirtualMachineInstanceSpec
     */
    volumes?: Array<V1Volume>;
}

/**
* @export
* @enum {string}
*/
export enum V1VirtualMachineInstanceSpecDnsPolicyEnum {
    ClusterFirst = 'ClusterFirst',
    ClusterFirstWithHostNet = 'ClusterFirstWithHostNet',
    Default = 'Default',
    None = 'None'
}

export function V1VirtualMachineInstanceSpecFromJSON(json: any): V1VirtualMachineInstanceSpec {
    return V1VirtualMachineInstanceSpecFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessCredentials': !exists(json, 'accessCredentials') ? undefined : ((json['accessCredentials'] as Array<any>).map(V1AccessCredentialFromJSON)),
        'affinity': !exists(json, 'affinity') ? undefined : K8sIoApiCoreV1AffinityFromJSON(json['affinity']),
        'architecture': !exists(json, 'architecture') ? undefined : json['architecture'],
        'dnsConfig': !exists(json, 'dnsConfig') ? undefined : K8sIoApiCoreV1PodDNSConfigFromJSON(json['dnsConfig']),
        'dnsPolicy': !exists(json, 'dnsPolicy') ? undefined : json['dnsPolicy'],
        'domain': V1DomainSpecFromJSON(json['domain']),
        'evictionStrategy': !exists(json, 'evictionStrategy') ? undefined : json['evictionStrategy'],
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'livenessProbe': !exists(json, 'livenessProbe') ? undefined : V1ProbeFromJSON(json['livenessProbe']),
        'networks': !exists(json, 'networks') ? undefined : ((json['networks'] as Array<any>).map(V1NetworkFromJSON)),
        'nodeSelector': !exists(json, 'nodeSelector') ? undefined : json['nodeSelector'],
        'priorityClassName': !exists(json, 'priorityClassName') ? undefined : json['priorityClassName'],
        'readinessProbe': !exists(json, 'readinessProbe') ? undefined : V1ProbeFromJSON(json['readinessProbe']),
        'schedulerName': !exists(json, 'schedulerName') ? undefined : json['schedulerName'],
        'startStrategy': !exists(json, 'startStrategy') ? undefined : json['startStrategy'],
        'subdomain': !exists(json, 'subdomain') ? undefined : json['subdomain'],
        'terminationGracePeriodSeconds': !exists(json, 'terminationGracePeriodSeconds') ? undefined : json['terminationGracePeriodSeconds'],
        'tolerations': !exists(json, 'tolerations') ? undefined : ((json['tolerations'] as Array<any>).map(K8sIoApiCoreV1TolerationFromJSON)),
        'topologySpreadConstraints': !exists(json, 'topologySpreadConstraints') ? undefined : ((json['topologySpreadConstraints'] as Array<any>).map(K8sIoApiCoreV1TopologySpreadConstraintFromJSON)),
        'volumes': !exists(json, 'volumes') ? undefined : ((json['volumes'] as Array<any>).map(V1VolumeFromJSON)),
    };
}

export function V1VirtualMachineInstanceSpecToJSON(value?: V1VirtualMachineInstanceSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessCredentials': value.accessCredentials === undefined ? undefined : ((value.accessCredentials as Array<any>).map(V1AccessCredentialToJSON)),
        'affinity': K8sIoApiCoreV1AffinityToJSON(value.affinity),
        'architecture': value.architecture,
        'dnsConfig': K8sIoApiCoreV1PodDNSConfigToJSON(value.dnsConfig),
        'dnsPolicy': value.dnsPolicy,
        'domain': V1DomainSpecToJSON(value.domain),
        'evictionStrategy': value.evictionStrategy,
        'hostname': value.hostname,
        'livenessProbe': V1ProbeToJSON(value.livenessProbe),
        'networks': value.networks === undefined ? undefined : ((value.networks as Array<any>).map(V1NetworkToJSON)),
        'nodeSelector': value.nodeSelector,
        'priorityClassName': value.priorityClassName,
        'readinessProbe': V1ProbeToJSON(value.readinessProbe),
        'schedulerName': value.schedulerName,
        'startStrategy': value.startStrategy,
        'subdomain': value.subdomain,
        'terminationGracePeriodSeconds': value.terminationGracePeriodSeconds,
        'tolerations': value.tolerations === undefined ? undefined : ((value.tolerations as Array<any>).map(K8sIoApiCoreV1TolerationToJSON)),
        'topologySpreadConstraints': value.topologySpreadConstraints === undefined ? undefined : ((value.topologySpreadConstraints as Array<any>).map(K8sIoApiCoreV1TopologySpreadConstraintToJSON)),
        'volumes': value.volumes === undefined ? undefined : ((value.volumes as Array<any>).map(V1VolumeToJSON)),
    };
}

