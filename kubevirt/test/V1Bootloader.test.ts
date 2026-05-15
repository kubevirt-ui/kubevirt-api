import { V1Bootloader } from '../models/V1Bootloader';

export const testObject: V1Bootloader = {
  bios: {
    useSerial: true,
  },
  efi: {
    secureBoot: true,
    persistent: true,
  },
};
