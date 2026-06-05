export interface V1LunTarget {
  /** Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi. */
  bus?: string;
  /** ReadOnly. Defaults to false. */
  readonly?: boolean;
  /** Reservation indicates if the disk needs to support the persistent reservation for the SCSI disk */
  reservation?: boolean;
}
