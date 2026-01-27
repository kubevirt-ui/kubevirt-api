import { V1KernelBootStatus } from '../models/V1KernelBootStatus';

export const testObject: V1KernelBootStatus = {
  initrdInfo: {
    checksum: 123456789,
  },
  kernelInfo: {
    checksum: 987654321,
  },
};
