/** Represents the stock pod network interface. */
export interface V1PodNetwork {
  /** IPv6 CIDR for the vm network. Defaults to fd10:0:2::/120 if not specified. */
  vmIPv6NetworkCIDR?: string;
  /** CIDR for vm network. Default 10.0.2.0/24 if not specified. */
  vmNetworkCIDR?: string;
}
