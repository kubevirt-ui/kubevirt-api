export interface V1ServerAddressByClientCIDR {
  /**
   * The CIDR with which clients can match their IP to figure out the server address that they should use.
   * @default ""
   */
  clientCIDR: string;
  /**
   * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
   * @default ""
   */
  serverAddress: string;
}
