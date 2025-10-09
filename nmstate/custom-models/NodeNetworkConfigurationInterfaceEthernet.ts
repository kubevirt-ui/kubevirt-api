export interface NodeNetworkConfigurationInterfaceEthernet {
  /**
   * The speed property is the integer speed in Mbps.
   * This property is ignored when applying if auto-negotiation: true.
   */
  speed: number;
  /**
   * The duplex property supports:
   * - full
   * - half
   * This property is ignored when applying if auto-negotiation: true.
   */
  duplex: 'full' | 'half';
  /**
   * The auto-negotiation property is the boolean switch for enabling auto negotiation on speed and duplex.
   * Default to true.
   */
  'auto-negotiation': boolean;
}
