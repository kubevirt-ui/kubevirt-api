import type { V1EFI } from './V1EFI';

/** FirmwarePreferences contains various optional defaults for Firmware. */
export interface V1beta1FirmwarePreferences {
  /** PreferredEfi optionally enables EFI */
  preferredEfi?: V1EFI;
  /** PreferredUseBios optionally enables BIOS */
  preferredUseBios?: boolean;
  /**
   * PreferredUseBiosSerial optionally transmitts BIOS output over the serial.
   *
   * Requires PreferredUseBios to be enabled.
   */
  preferredUseBiosSerial?: boolean;
  /**
   * PreferredUseEfi optionally enables EFI
   *
   * Deprecated: Will be removed with v1beta2 or v1
   */
  preferredUseEfi?: boolean;
  /**
   * PreferredUseSecureBoot optionally enables SecureBoot and the OVMF roms will be swapped for SecureBoot-enabled ones.
   *
   * Requires PreferredUseEfi and PreferredSmm to be enabled.
   *
   * Deprecated: Will be removed with v1beta2 or v1
   */
  preferredUseSecureBoot?: boolean;
}
