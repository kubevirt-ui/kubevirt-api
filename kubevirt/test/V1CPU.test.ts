import { V1CPU } from '../models/V1CPU';

export const testObject: V1CPU = {
  cores: 2,
  dedicatedCpuPlacement: true,
  features: [
    {
      name: 'vmx',
      policy: 'require',
    },
  ],
  isolateEmulatorThread: true,
  maxSockets: 8,
  model: 'host-passthrough',
  numa: {
    guestMappingPassthrough: {},
  },
  realtime: {
    mask: '0-3',
  },
  sockets: 2,
  threads: 2,
};
