import { V1beta1ClockPreferences } from '../models/V1beta1ClockPreferences';

export const testObject: V1beta1ClockPreferences = {
  preferredClockOffset: {
    timezone: 'UTC',
    utc: {
      offsetSeconds: 0,
    },
  },
  preferredTimer: {
    hpet: {
      present: false,
    },
    kvm: {
      present: true,
    },
    pit: {
      present: true,
      tickPolicy: 'delay',
    },
    rtc: {
      present: true,
      tickPolicy: 'catchup',
      track: 'guest',
    },
  },
};
