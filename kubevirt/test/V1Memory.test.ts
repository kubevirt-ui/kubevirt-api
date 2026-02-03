import { V1Memory } from '../models/V1Memory';

export const testObject: V1Memory = {
  guest: '8Gi',
  hugepages: {
    pageSize: '2Mi',
  },
  maxGuest: '16Gi',
};
