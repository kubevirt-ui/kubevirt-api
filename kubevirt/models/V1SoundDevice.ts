/** Represents the user's configuration to emulate sound cards in the VMI. */
export interface V1SoundDevice {
  /** We only support ich9 or ac97. If SoundDevice is not set: No sound card is emulated. If SoundDevice is set but Model is not: ich9 */
  model?: string;
  /**
   * User's defined name for this sound device
   * @default ""
   */
  name: string;
}
