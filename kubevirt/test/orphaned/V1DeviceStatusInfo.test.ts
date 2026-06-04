import { V1DeviceStatusInfo } from '../models/V1DeviceStatusInfo';

export const testObject: V1DeviceStatusInfo = {
  name: 'gpu0',
  deviceResourceClaimStatus: {
    name: 'gpu-device-0',
    resourceClaimName: 'my-gpu-claim',
    attributes: {
      pciAddress: '0000:00:05.0',
    },
  },
};
