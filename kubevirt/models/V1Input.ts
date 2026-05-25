export interface V1Input {
  /** Bus indicates the bus of input device to emulate. Supported values: virtio, usb. */
  bus?: string;
  /**
   * Name is the device name
   * @default ""
   */
  name: string;
  /**
   * Type indicated the type of input device. Supported values: tablet.
   * @default ""
   */
  type: string;
}
