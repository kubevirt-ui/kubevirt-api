import type { V1Time } from './V1Time';

/** DataImportCronCondition represents the state of a data import cron condition */
export interface V1beta1DataImportCronCondition {
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  lastHeartbeatTime?: V1Time;
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  lastTransitionTime?: V1Time;
  message?: string;
  reason?: string;
  /** @default "" */
  status: string;
  /** @default "" */
  type: string;
}
