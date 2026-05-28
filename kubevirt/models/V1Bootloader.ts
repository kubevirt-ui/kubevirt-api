import type { V1BIOS } from './V1BIOS';
import type { V1EFI } from './V1EFI';

export interface V1Bootloader {
  /** If set (default), BIOS will be used. */
  bios?: V1BIOS;
  /** If set, EFI will be used instead of BIOS. */
  efi?: V1EFI;
}
