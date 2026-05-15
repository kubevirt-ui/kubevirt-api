import { NodeNetworkConfigurationInterfaceBridge } from './NodeNetworkConfigurationInterfaceBridge';
import { NodeNetworkConfigurationInterfaceEthernet } from './NodeNetworkConfigurationInterfaceEthernet';
import { NodeNetworkConfigurationInterfaceEthtool } from './NodeNetworkConfigurationInterfaceEthtool';
import { NodeNetworkConfigurationInterfaceIPV4 } from './NodeNetworkConfigurationInterfaceIPV4';
import { NodeNetworkConfigurationInterfaceIPV6 } from './NodeNetworkConfigurationInterfaceIPV6';
import { NodeNetworkConfigurationInterfaceLinkAggregation } from './NodeNetworkConfigurationInterfaceLinkAggregation';
import { NodeNetworkConfigurationInterfaceLLDP } from './NodeNetworkConfigurationInterfaceLLDP';
import { InterfaceType } from './NodeNetworkConfigurationInterfaceType';

export interface NodeNetworkConfigurationInterface {
  /** The kernel name of the interface. */
  name: string;
  /** The description of the interface. */
  description?: string;
  /** The interface state. */
  state: 'UP' | 'DOWN' | 'up' | 'down' | 'absent' | 'ABSENT';
  /** The interface type. */
  type: InterfaceType;
  /** The maximum transmission unit of interface. */
  mtu?: number;
  /** The MAC address of interface. Format EA:60:E4:08:17:F1 */
  'mac-address'?: string;
  /**
   * Only valid for InterfaceType.BOND, InterfaceType.LINUX_BRIDGE and InterfaceType.OVS_INTERFACE. The Interface.COPY_MAC_FROM could hold the name of port which you want this controller interface to use the same MAC with.
   * The MAC address is read from permanent hardware MAC address and fallback to current MAC address.
   */
  'copy-mac-from'?: string;
  /** The Interface.IPV4 property holds the IPv4 stack information in a dictionary. */
  ipv4?: NodeNetworkConfigurationInterfaceIPV4;
  /** The Interface.IPV6 property holds the IPv6 stack information in a dictionary. */
  ipv6?: NodeNetworkConfigurationInterfaceIPV6;
  'link-aggregation'?: NodeNetworkConfigurationInterfaceLinkAggregation;
  bridge?: NodeNetworkConfigurationInterfaceBridge;
  ethernet?: NodeNetworkConfigurationInterfaceEthernet;

  ethtool?: NodeNetworkConfigurationInterfaceEthtool;

  lldp?: NodeNetworkConfigurationInterfaceLLDP;

  vlan?: {
    id: number;
    'base-iface': string;
    protocol?: string;
  };

  patch?: {
    peer?: string;
  };
}
