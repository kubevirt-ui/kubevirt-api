import type { V1KernelBootContainer } from './V1KernelBootContainer';

export interface V1KernelBoot {
  /** Container defines the container that containes kernel artifacts */
  container?: V1KernelBootContainer;
  /** Arguments to be passed to the kernel at boot time */
  kernelArgs?: string;
}
