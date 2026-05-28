import type { V1DHCPOptions } from './V1DHCPOptions';
import type { V1DeprecatedInterfaceMacvtap } from './V1DeprecatedInterfaceMacvtap';
import type { V1DeprecatedInterfacePasst } from './V1DeprecatedInterfacePasst';
import type { V1DeprecatedInterfaceSlirp } from './V1DeprecatedInterfaceSlirp';
import type { V1InterfaceBridge } from './V1InterfaceBridge';
import type { V1InterfaceMasquerade } from './V1InterfaceMasquerade';
import type { V1InterfacePasstBinding } from './V1InterfacePasstBinding';
import type { V1InterfaceSRIOV } from './V1InterfaceSRIOV';
import type { V1PluginBinding } from './V1PluginBinding';
import type { V1Port } from './V1Port';

export interface V1Interface {
  /**
   * If specified, the ACPI index is used to provide network interface device naming, that is stable across changes in PCI addresses assigned to the device. This value is required to be unique across all devices and be between 1 and (16*1024-1).
   * @format int32
   */
  acpiIndex?: number;
  /** Binding specifies the binding plugin that will be used to connect the interface to the guest. It provides an alternative to InterfaceBindingMethod. version: 1alphav1 */
  binding?: V1PluginBinding;
  /**
   * BootOrder is an integer value > 0, used to determine ordering of boot devices. Lower values take precedence. Each interface or disk that has a boot order must have a unique value. Interfaces without a boot order are not tried.
   * @format int32
   */
  bootOrder?: number;
  /** InterfaceBridge connects to a given network via a linux bridge. */
  bridge?: V1InterfaceBridge;
  /** If specified the network interface will pass additional DHCP options to the VMI */
  dhcpOptions?: V1DHCPOptions;
  /** Interface MAC address. For example: de:ad:00:00:be:af or DE-AD-00-00-BE-AF. */
  macAddress?: string;
  /** DeprecatedMacvtap is an alias to the deprecated Macvtap interface, please refer to Kubevirt user guide for alternatives. Deprecated: Removed in v1.3 */
  macvtap?: V1DeprecatedInterfaceMacvtap;
  /** InterfaceMasquerade connects to a given network using netfilter rules to nat the traffic. */
  masquerade?: V1InterfaceMasquerade;
  /** Interface model. One of: e1000, e1000e, igb, ne2k_pci, pcnet, rtl8139, virtio. Defaults to virtio. */
  model?: string;
  /**
   * Logical name of the interface as well as a reference to the associated networks. Must match the Name of a Network.
   * @default ""
   */
  name: string;
  /** DeprecatedPasst is an alias to the deprecated Passt interface, please refer to Kubevirt user guide for alternatives. Deprecated: Removed in v1.3 */
  passt?: V1DeprecatedInterfacePasst;
  /** InterfacePasstBinding connects to a given network using passt usermode networking. */
  passtBinding?: V1InterfacePasstBinding;
  /** If specified, the virtual network interface will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10 */
  pciAddress?: string;
  /** List of ports to be forwarded to the virtual machine. */
  ports?: V1Port[];
  /** DeprecatedSlirp is an alias to the deprecated Slirp interface Deprecated: Removed in v1.3 */
  slirp?: V1DeprecatedInterfaceSlirp;
  /** InterfaceSRIOV connects to a given network by passing-through an SR-IOV PCI device via vfio. */
  sriov?: V1InterfaceSRIOV;
  /** State represents the requested operational state of the interface. The supported values are: `absent`, expressing a request to remove the interface. `down`, expressing a request to set the link down. `up`, expressing a request to set the link up. Empty value functions as `up`. */
  state?: string;
  /** If specified, the virtual network interface address and its tag will be provided to the guest via config drive */
  tag?: string;
}
