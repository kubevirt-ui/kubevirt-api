import { V1beta1MemoryInstancetype } from '../models/V1beta1MemoryInstancetype';

export const testObject: V1beta1MemoryInstancetype = {
  guest: '8Gi',
  hugepages: {
    pageSize: '2Mi',
  },
  maxGuest: '16Gi',
  overcommitPercent: 20,
};
