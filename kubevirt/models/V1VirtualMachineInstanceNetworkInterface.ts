export interface V1VirtualMachineInstanceNetworkInterface {
  /** Specifies the origin of the interface data collected. values: domain, guest-agent, multus-status. */
  infoSource?: string;
  /** The interface name inside the Virtual Machine */
  interfaceName?: string;
  /** IP address of a Virtual Machine interface. It is always the first item of IPs */
  ipAddress?: string;
  /** List of all IP addresses of a Virtual Machine interface */
  ipAddresses?: string[];
  /** LinkState Reports the current operational link state`. values: up, down. */
  linkState?: string;
  /** Hardware address of a Virtual Machine interface */
  mac?: string;
  /** Name of the interface, corresponds to name of the network assigned to the interface */
  name?: string;
  /** PodInterfaceName represents the name of the pod network interface */
  podInterfaceName?: string;
  /**
   * Specifies how many queues are allocated by MultiQueue
   * @format int32
   */
  queueCount?: number;
}
