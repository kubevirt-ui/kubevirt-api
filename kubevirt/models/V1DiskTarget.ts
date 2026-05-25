export interface V1DiskTarget {
  /** Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi, usb. */
  bus?: string;
  /** If specified, the virtual disk will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10 */
  pciAddress?: string;
  /** ReadOnly. Defaults to false. */
  readonly?: boolean;
}
