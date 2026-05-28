export interface V1CDRomTarget {
  /** Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi. */
  bus?: string;
  /** ReadOnly. Defaults to true. */
  readonly?: boolean;
  /** Tray indicates if the tray of the device is open or closed. Allowed values are "open" and "closed". Defaults to closed. */
  tray?: string;
}
