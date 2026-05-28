import type { V1Diag288Watchdog } from './V1Diag288Watchdog';
import type { V1I6300ESBWatchdog } from './V1I6300ESBWatchdog';

export interface V1Watchdog {
  /** diag288 watchdog device (specific to s390x architecture). */
  diag288?: V1Diag288Watchdog;
  /** i6300esb watchdog device. */
  i6300esb?: V1I6300ESBWatchdog;
  /**
   * Name of the watchdog.
   * @default ""
   */
  name: string;
}
