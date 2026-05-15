import { V1DHCPOptions } from '../models/V1DHCPOptions';

export const testObject: V1DHCPOptions = {
  bootFileName: 'pxelinux.0',
  ntpServers: ['time.google.com', 'pool.ntp.org'],
  privateOptions: [
    {
      option: 252,
      value: 'http://proxy.example.com/wpad.dat',
    },
  ],
  tftpServerName: 'tftp.example.com',
};
