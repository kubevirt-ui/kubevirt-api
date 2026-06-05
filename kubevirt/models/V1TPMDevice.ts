export interface V1TPMDevice {
  /** Enabled allows a user to explicitly disable the vTPM even when one is enabled by a preference referenced by the VirtualMachine Defaults to True */
  enabled?: boolean;
  /** Persistent indicates the state of the TPM device should be kept accross reboots Defaults to false */
  persistent?: boolean;
}
