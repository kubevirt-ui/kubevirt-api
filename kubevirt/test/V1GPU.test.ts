import { V1GPU } from '../models/V1GPU';

export const testObject: V1GPU = {
  claimName: 'gpu-claim',
  deviceName: 'nvidia.com/GP102GL_Tesla_P40',
  name: 'gpu1',
  requestName: 'gpu-request',
  tag: 'gpu-tag',
  virtualGPUOptions: {
    display: {
      enabled: true,
    },
  },
};
