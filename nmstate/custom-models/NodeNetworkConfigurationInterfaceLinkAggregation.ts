import { NodeNetworkConfigurationInterfaceBondMode } from './NodeNetworkConfigurationInterfaceBondMode';
import { NodeNetworkConfigurationInterfaceLinkAggregationOptions } from './NodeNetworkConfigurationInterfaceLinkAggregationOptions';

export interface NodeNetworkConfigurationInterfaceLinkAggregation {
  /** The bond mode in kernel. Possible values are:
   *
   * BondMode.ROUND_ROBIN
   * BondMode.ACTIVE_BACKUP
   * BondMode.XOR
   * BondMode.BROADCAST
   * BondMode.LACP
   * BondMode.TLB
   * BondMode.ALB
   * Please refer to kernel document for detail.
   *
   * When changing bond mode, the Bond.OPTIONS_SUBTREE will not merge from current state. User is required to provide full desire bond options when switching bond mode.
   */
  mode: NodeNetworkConfigurationInterfaceBondMode;
  /** The names of bond port interfaces.
   * This property does not support partial editing, full list of ports is required in desired state.
   * If not defined in desire state, current status will be preserved.
   */
  port: string[];

  /** Set to {} will revert all bond options back to kernel defaults.
   * Nmstate will not perform verification on whether desired bond options is applied to kernel due to complexity of it, please verify the bond options by yourself. */
  options?: NodeNetworkConfigurationInterfaceLinkAggregationOptions;
}
