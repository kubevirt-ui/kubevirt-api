import { V1DeviceResourceClaimStatus } from '../models/V1DeviceResourceClaimStatus';

export const testObject: V1DeviceResourceClaimStatus = {
  attributes: {
    pciAddress: '0000:00:05.0',
  },
  name: 'gpu-device-0',
  resourceClaimName: 'my-gpu-claim',
};
