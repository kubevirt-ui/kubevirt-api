import type { V1FilesystemVirtiofs } from './V1FilesystemVirtiofs';

export interface V1Filesystem {
  /**
   * Name is the device name
   * @default ""
   */
  name: string;
  /** Virtiofs is supported */
  virtiofs: V1FilesystemVirtiofs;
}
