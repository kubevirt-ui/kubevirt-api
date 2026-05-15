import { V1beta1CPUInstancetype } from '../models/V1beta1CPUInstancetype';

export const testObject: V1beta1CPUInstancetype = {
  dedicatedCPUPlacement: true,
  guest: 4,
  isolateEmulatorThread: true,
  maxSockets: 8,
  model: 'host-passthrough',
  numa: {
    guestMappingPassthrough: {},
  },
  realtime: {
    mask: '0-3',
  },
};
