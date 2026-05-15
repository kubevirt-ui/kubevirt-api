import { V1ComponentConfig } from '../models/V1ComponentConfig';

export const testObject: V1ComponentConfig = {
  nodePlacement: {
    nodeSelector: { 'node-type': 'worker' },
  },
  replicas: 2,
};
