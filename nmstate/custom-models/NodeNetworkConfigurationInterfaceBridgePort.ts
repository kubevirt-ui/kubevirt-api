export interface NodeNetworkConfigurationInterfaceBridgePort {
  'link-aggregation'?: {
    mode?: string;
    port?: NodeNetworkConfigurationInterfaceBridgePort[];
  };
  name: string;
  'stp-hairpin-mode'?: boolean;
  'stp-path-cost'?: number;
  'stp-priority'?: number;
  vlan?: {
    mode?: string;
  };
}
