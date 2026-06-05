import type { V1KernelBootContainer } from './V1KernelBootContainer';

/** Represents the firmware blob used to assist in the kernel boot process. Used for setting the kernel, initrd and command line arguments */
export interface V1KernelBoot {
  /** Container defines the container that containes kernel artifacts */
  container?: V1KernelBootContainer;
  /** Arguments to be passed to the kernel at boot time */
  kernelArgs?: string;
}
