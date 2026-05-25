import type { V1BlockSize } from './V1BlockSize';
import type { V1CDRomTarget } from './V1CDRomTarget';
import type { V1DiskTarget } from './V1DiskTarget';
import type { V1LunTarget } from './V1LunTarget';

export interface V1Disk {
  /** If specified, the virtual disk will be presented with the given block sizes. */
  blockSize?: V1BlockSize;
  /**
   * BootOrder is an integer value > 0, used to determine ordering of boot devices. Lower values take precedence. Each disk or interface that has a boot order must have a unique value. Disks without a boot order are not tried if a disk with a boot order exists.
   * @format int32
   */
  bootOrder?: number;
  /** Cache specifies which kvm disk cache mode should be used. Supported values are: none: Guest I/O not cached on the host, but may be kept in a disk cache. writethrough: Guest I/O cached on the host but written through to the physical medium. Slowest but with most guarantees. writeback: Guest I/O cached on the host. Defaults to none if the storage supports O_DIRECT, otherwise writethrough. */
  cache?: string;
  /** Attach a volume as a cdrom to the vmi. */
  cdrom?: V1CDRomTarget;
  /** ChangedBlockTracking indicates this disk should have CBT option Defaults to false. */
  changedBlockTracking?: boolean;
  /** dedicatedIOThread indicates this disk should have an exclusive IO Thread. Enabling this implies useIOThreads = true. Defaults to false. */
  dedicatedIOThread?: boolean;
  /** Attach a volume as a disk to the vmi. */
  disk?: V1DiskTarget;
  /** If specified, it can change the default error policy (stop) for the disk */
  errorPolicy?: string;
  /** IO specifies which QEMU disk IO mode should be used. Supported values are: native, default, threads. */
  io?: string;
  /** Attach a volume as a LUN to the vmi. */
  lun?: V1LunTarget;
  /**
   * Name is the device name
   * @default ""
   */
  name: string;
  /** Serial provides the ability to specify a serial number for the disk device. */
  serial?: string;
  /** If specified the disk is made sharable and multiple write from different VMs are permitted */
  shareable?: boolean;
  /** If specified, disk address and its tag will be provided to the guest via config drive metadata */
  tag?: string;
}
