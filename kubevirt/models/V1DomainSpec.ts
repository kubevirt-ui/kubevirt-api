import type { V1CPU } from './V1CPU';
import type { V1Chassis } from './V1Chassis';
import type { V1Clock } from './V1Clock';
import type { V1Devices } from './V1Devices';
import type { V1DiskIOThreads } from './V1DiskIOThreads';
import type { V1Features } from './V1Features';
import type { V1Firmware } from './V1Firmware';
import type { V1LaunchSecurity } from './V1LaunchSecurity';
import type { V1Machine } from './V1Machine';
import type { V1Memory } from './V1Memory';
import type { V1ResourceRequirements } from './V1ResourceRequirements';

export interface V1DomainSpec {
  /** Chassis specifies the chassis info passed to the domain. */
  chassis?: V1Chassis;
  /** Clock sets the clock and timers of the vmi. */
  clock?: V1Clock;
  /** CPU allow specified the detailed CPU topology inside the vmi. */
  cpu?: V1CPU;
  /**
   * Devices allows adding disks, network interfaces, and others
   * @default {}
   */
  devices: V1Devices;
  /** Features like acpi, apic, hyperv, smm. */
  features?: V1Features;
  /** Firmware. */
  firmware?: V1Firmware;
  /** IOThreads specifies the IOThreads options. */
  ioThreads?: V1DiskIOThreads;
  /** Controls whether or not disks will share IOThreads. Omitting IOThreadsPolicy disables use of IOThreads. One of: shared, auto, supplementalPool */
  ioThreadsPolicy?: string;
  /** Launch Security setting of the vmi. */
  launchSecurity?: V1LaunchSecurity;
  /** Machine type. */
  machine?: V1Machine;
  /** Memory allow specifying the VMI memory features. */
  memory?: V1Memory;
  /** RebootPolicy specifies how the guest should behave on reboot. Reboot (default): The guest is allowed to reboot silently. Terminate: The VMI will be terminated on guest reboot, allowing higher level controllers (such as the VM controller) to recreate the VMI with any updated configuration such as boot order changes. */
  rebootPolicy?: string;
  /**
   * Resources describes the Compute Resources required by this vmi.
   * @default {}
   */
  resources?: V1ResourceRequirements;
}
