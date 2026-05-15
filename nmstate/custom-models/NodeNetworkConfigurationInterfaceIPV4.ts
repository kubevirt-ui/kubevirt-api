import { NodeNetworkConfigurationInterfaceIPV4Address } from './NodeNetworkConfigurationInterfaceIPV4Address';

export const AUTO_DNS = 'auto-dns';
export const AUTO_ROUTES = 'auto-routes';
export const AUTO_GATEWAY = 'auto-gateway';
export interface NodeNetworkConfigurationInterfaceIPV4 {
  /**
   * The enabled property is the boolean switch to enable and disable the whole IP stack.
   * For IPv6 with enabled: false, the link local address will also be removed from this interface.
   * If explicitly set to enabled: false, all other IP parameters will be ignored and will not fail the verification
   */
  enabled: boolean;
  /** The dhcp property is the boolean switch for DHCP on specified interface. */
  dhcp?: boolean;

  /**
   * The auto-routes property is the boolean switch for whether apply routes entries(including default gateway) retried from dynamic configuration method.
   * Set to true by default unless current state set to false explicitly.
   */
  [AUTO_ROUTES]?: boolean;

  /**
   * The auto-routes property is the boolean switch for whether apply default gateway retried from dynamic configuration method.
   * Set to true by default unless current state set to false explicitly.
   */
  [AUTO_GATEWAY]?: boolean;

  /**
   * The auto-dns property is the boolean switch for whether apply DNS configurations retried from dynamic configuration method.
   * Set to true by default unless current state set to false explicitly.
   */
  [AUTO_DNS]?: boolean;
  /**
   * The auto-route-table-id property is the integer for route table ID of the routes retried from dynamic configuration method.
   * If not mentioned in desire state or set to 0, nmstate will use the main table ID 254.
   */
  'auto-route-table-id'?: number;

  /**
   * The auto-route-metric property is the integer for route metric of the routes retried from dynamic configuration method.
   * If not mentioned in desire state or set to -1, nmstate will let network backend to determine the metric.
   */
  'auto-route-metric'?: number;

  /** when dhcp is true, this property is ignored */
  address?: NodeNetworkConfigurationInterfaceIPV4Address[];
}
