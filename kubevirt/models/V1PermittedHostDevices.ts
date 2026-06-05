import type { V1MediatedHostDevice } from './V1MediatedHostDevice';
import type { V1PciHostDevice } from './V1PciHostDevice';
import type { V1USBHostDevice } from './V1USBHostDevice';

/** PermittedHostDevices holds information about devices allowed for passthrough */
export interface V1PermittedHostDevices {
  mediatedDevices?: V1MediatedHostDevice[];
  pciHostDevices?: V1PciHostDevice[];
  usb?: V1USBHostDevice[];
}
