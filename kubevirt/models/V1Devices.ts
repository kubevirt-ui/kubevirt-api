import type { V1ClientPassthroughDevices } from './V1ClientPassthroughDevices';
import type { V1Disk } from './V1Disk';
import type { V1DownwardMetrics } from './V1DownwardMetrics';
import type { V1Filesystem } from './V1Filesystem';
import type { V1GPU } from './V1GPU';
import type { V1HostDevice } from './V1HostDevice';
import type { V1Input } from './V1Input';
import type { V1Interface } from './V1Interface';
import type { V1PanicDevice } from './V1PanicDevice';
import type { V1Rng } from './V1Rng';
import type { V1SoundDevice } from './V1SoundDevice';
import type { V1TPMDevice } from './V1TPMDevice';
import type { V1VideoDevice } from './V1VideoDevice';
import type { V1Watchdog } from './V1Watchdog';

export interface V1Devices {
  /** Whether to attach the default graphics device or not. VNC will not be available if set to false. Defaults to true. */
  autoattachGraphicsDevice?: boolean;
  /** Whether to attach an Input Device. Defaults to false. */
  autoattachInputDevice?: boolean;
  /** Whether to attach the Memory balloon device with default period. Period can be adjusted in virt-config. Defaults to true. */
  autoattachMemBalloon?: boolean;
  /** Whether to attach a pod network interface. Defaults to true. */
  autoattachPodInterface?: boolean;
  /** Whether to attach the default virtio-serial console or not. Serial console access will not be available if set to false. Defaults to true. */
  autoattachSerialConsole?: boolean;
  /** Whether to attach the VSOCK CID to the VM or not. VSOCK access will be available if set to true. Defaults to false. */
  autoattachVSOCK?: boolean;
  /** Whether or not to enable virtio multi-queue for block devices. Defaults to false. */
  blockMultiQueue?: boolean;
  /** To configure and access client devices such as redirecting USB */
  clientPassthrough?: V1ClientPassthroughDevices;
  /** DisableHotplug disabled the ability to hotplug disks. */
  disableHotplug?: boolean;
  /** Disks describes disks, cdroms and luns which are connected to the vmi. */
  disks?: V1Disk[];
  /** DownwardMetrics creates a virtio serials for exposing the downward metrics to the vmi. */
  downwardMetrics?: V1DownwardMetrics;
  /** Filesystems describes filesystem which is connected to the vmi. */
  filesystems?: V1Filesystem[];
  /** Whether to attach a GPU device to the vmi. */
  gpus?: V1GPU[];
  /** Whether to attach a host device to the vmi. */
  hostDevices?: V1HostDevice[];
  /** Inputs describe input devices */
  inputs?: V1Input[];
  /** Interfaces describe network interfaces which are added to the vmi. */
  interfaces?: V1Interface[];
  /** Whether to log the auto-attached default serial console or not. Serial console logs will be collect to a file and then streamed from a named `guest-console-log`. Not relevant if autoattachSerialConsole is disabled. Defaults to cluster wide setting on VirtualMachineOptions. */
  logSerialConsole?: boolean;
  /** If specified, virtual network interfaces configured with a virtio bus will also enable the vhost multiqueue feature for network devices. The number of queues created depends on additional factors of the VirtualMachineInstance, like the number of guest CPUs. */
  networkInterfaceMultiqueue?: boolean;
  /** PanicDevices provides additional crash information when a guest crashes. */
  panicDevices?: V1PanicDevice[];
  /** Whether to have random number generator from host */
  rng?: V1Rng;
  /** Whether to emulate a sound device. */
  sound?: V1SoundDevice;
  /** Whether to emulate a TPM device. */
  tpm?: V1TPMDevice;
  /** Fall back to legacy virtio 0.9 support if virtio bus is selected on devices. This is helpful for old machines like CentOS6 or RHEL6 which do not understand virtio_non_transitional (virtio 1.0). */
  useVirtioTransitional?: boolean;
  /** Video describes the video device configuration for the vmi. */
  video?: V1VideoDevice;
  /** Watchdog describes a watchdog device which can be added to the vmi. */
  watchdog?: V1Watchdog;
}
