import { V1USBHostDevice } from '../models/V1USBHostDevice';

export const testObject: V1USBHostDevice = {
  externalResourceProvider: false,
  resourceName: 'kubevirt.io/storage',
  selectors: [
    {
      product: '1234',
      vendor: '5678',
    },
  ],
};
