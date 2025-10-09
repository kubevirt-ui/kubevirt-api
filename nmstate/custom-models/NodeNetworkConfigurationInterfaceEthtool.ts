/** The ethtool section of interface holds the ethtool settings of network cards, including these subsections. */
export interface NodeNetworkConfigurationInterfaceEthtool {
  pause?: {
    rx: boolean;
    tx: boolean;
    autoneg: boolean;
  };
  feature?: {
    [key in string]: boolean;
  };
  coalesce?: {
    ['adaptive-rx']?: boolean;
    ['adaptive-tx']?: boolean;
    ['pkt-rate-high']?: number;
    ['pkt-rate-low']?: number;
    ['rx-frames']?: number;
    ['rx-frames-high']?: number;
    ['rx-frames-low']?: number;
    ['rx-usecs']?: number;
    ['rx-usecs-high']?: number;
    ['rx-usecs-irq']?: number;
    ['rx-usecs-low']?: number;
    ['sample-interval']?: number;
    ['stats-block-usecs']?: number;
    ['tx-frames']?: number;
    ['tx-frames-high']?: number;
    ['tx-frames-irq']?: number;
    ['tx-frames-low']?: number;
    ['tx-usecs']?: number;
    ['tx-usecs-high']?: number;
    ['tx-usecs-irq']?: number;
    ['tx-usecs-low']?: number;
  };
  ring?: {
    rx?: number;
    ['rx-max']?: number;
    ['rx-jumbo']?: number;
    ['rx-jumbo-max']?: number;
    ['rx-mini']?: number;
    ['rx-mini-max']?: number;
    tx?: number;
    ['tx-max']?: number;
  };
}
