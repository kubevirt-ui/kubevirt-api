import { V1Firmware } from '../models/V1Firmware';

export const testObject: V1Firmware = {
  acpi: {
    slicNameRef: 'acpi-slic-secret',
  },
  bootloader: {
    efi: {
      secureBoot: true,
      persistent: true,
    },
  },
  kernelBoot: {
    container: {
      image: 'quay.io/kubevirt/kernel-boot:latest',
      initrdPath: '/boot/initrd',
      kernelPath: '/boot/vmlinuz',
    },
    kernelArgs: 'console=ttyS0',
  },
  serial: 'serial-number-123',
  uuid: 'uuid-12345678-1234-1234-1234-123456789012',
};
