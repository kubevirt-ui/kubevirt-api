import { V1DeviceStatus } from '../models/V1DeviceStatus';

export const testObject: V1DeviceStatus = {
  gpuStatuses: [
    {
      name: 'gpu0',
      deviceResourceClaimStatus: {
        name: 'gpu-device-0',
        resourceClaimName: 'my-gpu-claim',
      },
    },
  ],
  hostDeviceStatuses: [
    {
      name: 'host-device0',
    },
  ],
};
