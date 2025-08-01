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
    V1DHCPOptions,
    V1DHCPOptionsFromJSON,
    V1DHCPOptionsFromJSONTyped,
    V1DHCPOptionsToJSON,
    V1PluginBinding,
    V1PluginBindingFromJSON,
    V1PluginBindingFromJSONTyped,
    V1PluginBindingToJSON,
    V1Port,
    V1PortFromJSON,
    V1PortFromJSONTyped,
    V1PortToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Interface
 */
export interface V1Interface {
    /**
     * If specified, the ACPI index is used to provide network interface device naming, that is stable across changes in PCI addresses assigned to the device. This value is required to be unique across all devices and be between 1 and (16*1024-1).
     * @type {number}
     * @memberof V1Interface
     */
    acpiIndex?: number;
    /**
     * 
     * @type {V1PluginBinding}
     * @memberof V1Interface
     */
    binding?: V1PluginBinding;
    /**
     * BootOrder is an integer value > 0, used to determine ordering of boot devices. Lower values take precedence. Each interface or disk that has a boot order must have a unique value. Interfaces without a boot order are not tried.
     * @type {number}
     * @memberof V1Interface
     */
    bootOrder?: number;
    /**
     * InterfaceBridge connects to a given network via a linux bridge.
     * @type {object}
     * @memberof V1Interface
     */
    bridge?: object;
    /**
     * 
     * @type {V1DHCPOptions}
     * @memberof V1Interface
     */
    dhcpOptions?: V1DHCPOptions;
    /**
     * Interface MAC address. For example: de:ad:00:00:be:af or DE-AD-00-00-BE-AF.
     * @type {string}
     * @memberof V1Interface
     */
    macAddress?: string;
    /**
     * DeprecatedInterfaceMacvtap is an alias to the deprecated InterfaceMacvtap that connects to a given network by extending the Kubernetes node's L2 networks via a macvtap interface. Deprecated: Removed in v1.3
     * @type {object}
     * @memberof V1Interface
     */
    macvtap?: object;
    /**
     * InterfaceMasquerade connects to a given network using netfilter rules to nat the traffic.
     * @type {object}
     * @memberof V1Interface
     */
    masquerade?: object;
    /**
     * Interface model. One of: e1000, e1000e, igb, ne2k_pci, pcnet, rtl8139, virtio. Defaults to virtio.
     * @type {string}
     * @memberof V1Interface
     */
    model?: string;
    /**
     * Logical name of the interface as well as a reference to the associated networks. Must match the Name of a Network.
     * @type {string}
     * @memberof V1Interface
     */
    name: string;
    /**
     * DeprecatedInterfacePasst is an alias to the deprecated InterfacePasst Deprecated: Removed in v1.3
     * @type {object}
     * @memberof V1Interface
     */
    passt?: object;
    /**
     * If specified, the virtual network interface will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
     * @type {string}
     * @memberof V1Interface
     */
    pciAddress?: string;
    /**
     * List of ports to be forwarded to the virtual machine.
     * @type {Array<V1Port>}
     * @memberof V1Interface
     */
    ports?: Array<V1Port>;
    /**
     * DeprecatedInterfaceSlirp is an alias to the deprecated InterfaceSlirp that connects to a given network using QEMU user networking mode. Deprecated: Removed in v1.3
     * @type {object}
     * @memberof V1Interface
     */
    slirp?: object;
    /**
     * InterfaceSRIOV connects to a given network by passing-through an SR-IOV PCI device via vfio.
     * @type {object}
     * @memberof V1Interface
     */
    sriov?: object;
    /**
     * State represents the requested operational state of the interface. The supported values are: `absent`, expressing a request to remove the interface. `down`, expressing a request to set the link down. `up`, expressing a request to set the link up. Empty value functions as `up`.
     * @type {string}
     * @memberof V1Interface
     */
    state?: string;
    /**
     * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
     * @type {string}
     * @memberof V1Interface
     */
    tag?: string;
}

export function V1InterfaceFromJSON(json: any): V1Interface {
    return V1InterfaceFromJSONTyped(json, false);
}

export function V1InterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Interface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acpiIndex': !exists(json, 'acpiIndex') ? undefined : json['acpiIndex'],
        'binding': !exists(json, 'binding') ? undefined : V1PluginBindingFromJSON(json['binding']),
        'bootOrder': !exists(json, 'bootOrder') ? undefined : json['bootOrder'],
        'bridge': !exists(json, 'bridge') ? undefined : json['bridge'],
        'dhcpOptions': !exists(json, 'dhcpOptions') ? undefined : V1DHCPOptionsFromJSON(json['dhcpOptions']),
        'macAddress': !exists(json, 'macAddress') ? undefined : json['macAddress'],
        'macvtap': !exists(json, 'macvtap') ? undefined : json['macvtap'],
        'masquerade': !exists(json, 'masquerade') ? undefined : json['masquerade'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'name': json['name'],
        'passt': !exists(json, 'passt') ? undefined : json['passt'],
        'pciAddress': !exists(json, 'pciAddress') ? undefined : json['pciAddress'],
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(V1PortFromJSON)),
        'slirp': !exists(json, 'slirp') ? undefined : json['slirp'],
        'sriov': !exists(json, 'sriov') ? undefined : json['sriov'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
    };
}

export function V1InterfaceToJSON(value?: V1Interface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acpiIndex': value.acpiIndex,
        'binding': V1PluginBindingToJSON(value.binding),
        'bootOrder': value.bootOrder,
        'bridge': value.bridge,
        'dhcpOptions': V1DHCPOptionsToJSON(value.dhcpOptions),
        'macAddress': value.macAddress,
        'macvtap': value.macvtap,
        'masquerade': value.masquerade,
        'model': value.model,
        'name': value.name,
        'passt': value.passt,
        'pciAddress': value.pciAddress,
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(V1PortToJSON)),
        'slirp': value.slirp,
        'sriov': value.sriov,
        'state': value.state,
        'tag': value.tag,
    };
}

