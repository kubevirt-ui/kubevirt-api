import type { V1InitrdInfo } from './V1InitrdInfo';
import type { V1KernelInfo } from './V1KernelInfo';

/** KernelBootStatus contains info about the kernelBootContainer */
export interface V1KernelBootStatus {
  /** InitrdInfo show info about the initrd file */
  initrdInfo?: V1InitrdInfo;
  /** KernelInfo show info about the kernel image */
  kernelInfo?: V1KernelInfo;
}
