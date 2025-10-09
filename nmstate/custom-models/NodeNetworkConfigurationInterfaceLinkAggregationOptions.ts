/**
 * Please check kernel document for their allowed value and combinations.
 * The balance_slb is not kernel option of bond, but user space configuration, only supported by nmstate 2.2.1+, NetworkManager 1.41+ on patched linux kernel.
 * The verification process of nmstate will ignore bond option miss-match.
 */
export interface NodeNetworkConfigurationInterfaceLinkAggregationOptions {
  all_slaves_active?: string;
  arp_all_targets?: string;
  arp_interval?: number;
  arp_validate?: string;
  downdelay?: number;
  lp_interval?: number;
  miimon?: number;
  min_links?: number;
  packets_per_slave?: number;
  primary_reselect?: string;
  resend_igmp?: number;
  updelay?: number;
  use_carrier?: true;
}
