import { V1VirtualMachineInstanceNetworkInterface } from '../models/V1VirtualMachineInstanceNetworkInterface';

export const testObject: V1VirtualMachineInstanceNetworkInterface = {
  infoSource: 'domain',
  interfaceName: 'eth0',
  ipAddress: '10.244.0.5',
  ipAddresses: ['10.244.0.5', 'fe80::1'],
  linkState: 'up',
  mac: '52:54:00:12:34:56',
  name: 'default',
  podInterfaceName: 'eth0',
  queueCount: 1,
};
