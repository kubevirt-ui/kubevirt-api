import type { V1ACPI } from './V1ACPI';
import type { V1Bootloader } from './V1Bootloader';
import type { V1KernelBoot } from './V1KernelBoot';

export interface V1Firmware {
  /** Information that can be set in the ACPI table */
  acpi?: V1ACPI;
  /** Settings to control the bootloader that is used. */
  bootloader?: V1Bootloader;
  /** Settings to set the kernel for booting. */
  kernelBoot?: V1KernelBoot;
  /** The system-serial-number in SMBIOS */
  serial?: string;
  /** UUID reported by the vmi bios. Defaults to a random generated uid. */
  uuid?: string;
}
