/** If set, EFI will be used instead of BIOS. */
export interface V1EFI {
  /** If set to true, Persistent will persist the EFI NVRAM across reboots. Defaults to false */
  persistent?: boolean;
  /** If set, SecureBoot will be enabled and the OVMF roms will be swapped for SecureBoot-enabled ones. Requires SMM to be enabled. Defaults to true */
  secureBoot?: boolean;
}
