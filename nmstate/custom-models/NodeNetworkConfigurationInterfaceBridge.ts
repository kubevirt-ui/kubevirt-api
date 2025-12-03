import { NodeNetworkConfigurationInterfaceBridgePort } from './NodeNetworkConfigurationInterfaceBridgePort';

export interface NodeNetworkConfigurationInterfaceBridge {
  port?: NodeNetworkConfigurationInterfaceBridgePort[];
  ['allow-extra-patch-ports']?: boolean;
  options?: {
    /** The mask of group address to forward. */
    'group-forward-mask'?: number;
    /** The Spanning Tree Protocol (STP) maximum message age, in seconds. */
    'mac-ageing-time'?: number;
    /** Whether IGMP snooping is enabled for this bridge. */
    'multicast-snooping'?: boolean;
    stp?: {
      /** Whether Spanning Tree Protocol (STP) is enabled for this bridge. */
      enabled: boolean;
      /** The Spanning Tree Protocol (STP) forwarding delay, in seconds. */
      'forward-delay'?: number;
      /** The Spanning Tree Protocol (STP) hello time, in seconds. */
      'hello-time'?: number;
      /** The Spanning Tree Protocol (STP) maximum message age, in seconds. */
      'max-age'?: number;
      /** Sets the Spanning Tree Protocol (STP) priority for this bridge. Lower values are “better”; the lowest priority bridge will be elected the root bridge. */
      priority?: number;
    };
  };
}
