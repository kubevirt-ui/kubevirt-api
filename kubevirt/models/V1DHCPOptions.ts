import type { V1DHCPPrivateOptions } from './V1DHCPPrivateOptions';

export interface V1DHCPOptions {
  /** If specified will pass option 67 to interface's DHCP server */
  bootFileName?: string;
  /** If specified will pass the configured NTP server to the VM via DHCP option 042. */
  ntpServers?: string[];
  /** If specified will pass extra DHCP options for private use, range: 224-254 */
  privateOptions?: V1DHCPPrivateOptions[];
  /** If specified will pass option 66 to interface's DHCP server */
  tftpServerName?: string;
}
