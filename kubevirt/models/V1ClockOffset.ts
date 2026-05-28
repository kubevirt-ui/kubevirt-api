import type { V1ClockOffsetUTC } from './V1ClockOffsetUTC';

export interface V1ClockOffset {
  /** Timezone sets the guest clock to the specified timezone. Zone name follows the TZ environment variable format (e.g. 'America/New_York'). */
  timezone?: string;
  /** UTC sets the guest clock to UTC on each boot. If an offset is specified, guest changes to the clock will be kept during reboots and are not reset. */
  utc?: V1ClockOffsetUTC;
}
