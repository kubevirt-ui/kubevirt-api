import type { V1USBSelector } from './V1USBSelector';

export interface V1USBHostDevice {
  /** If true, KubeVirt will leave the allocation and monitoring to an external device plugin */
  externalResourceProvider?: boolean;
  /**
   * Identifies the list of USB host devices. e.g: kubevirt.io/storage, kubevirt.io/bootable-usb, etc
   * @default ""
   */
  resourceName: string;
  selectors?: V1USBSelector[];
}
