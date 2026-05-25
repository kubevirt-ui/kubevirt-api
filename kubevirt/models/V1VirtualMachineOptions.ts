import type { V1DisableFreePageReporting } from './V1DisableFreePageReporting';
import type { V1DisableSerialConsoleLog } from './V1DisableSerialConsoleLog';

export interface V1VirtualMachineOptions {
  /** DisableFreePageReporting disable the free page reporting of memory balloon device https://libvirt.org/formatdomain.html#memory-balloon-device. This will have effect only if AutoattachMemBalloon is not false and the vmi is not requesting any high performance feature (dedicatedCPU/realtime/hugePages), in which free page reporting is always disabled. */
  disableFreePageReporting?: V1DisableFreePageReporting;
  /** DisableSerialConsoleLog disables logging the auto-attached default serial console. If not set, serial console logs will be written to a file and then streamed from a container named `guest-console-log`. The value can be individually overridden for each VM, not relevant if AutoattachSerialConsole is disabled. */
  disableSerialConsoleLog?: V1DisableSerialConsoleLog;
}
