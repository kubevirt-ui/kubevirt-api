import { V1Interface } from '../models/V1Interface';

export const testObject: V1Interface = {
  acpiIndex: 1,
  binding: {
    name: 'my-binding',
  },
  bootOrder: 1,
  bridge: {},
  dhcpOptions: {
    bootFileName: 'pxelinux.0',
    ntpServers: ['time.google.com'],
    privateOptions: [
      {
        option: 252,
        value: 'http://proxy.example.com/wpad.dat',
      },
    ],
    tftpServerName: 'tftp.example.com',
  },
  macAddress: 'de:ad:00:00:be:af',
  masquerade: {},
  model: 'virtio',
  name: 'default',
  pciAddress: '0000:81:01.10',
  ports: [
    {
      name: 'ssh',
      port: 22,
      protocol: 'TCP',
    },
  ],
  sriov: {},
  state: 'up',
  tag: 'network-tag',
};
