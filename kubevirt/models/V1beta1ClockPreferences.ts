import type { V1ClockOffset } from './V1ClockOffset';
import type { V1Timer } from './V1Timer';

export interface V1beta1ClockPreferences {
  /** ClockOffset allows specifying the UTC offset or the timezone of the guest clock. */
  preferredClockOffset?: V1ClockOffset;
  /** Timer specifies whih timers are attached to the vmi. */
  preferredTimer?: V1Timer;
}
