import { V1Clock } from '../models/V1Clock';

export const testObject: V1Clock = {
  timer: {
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
  timezone: 'UTC',
  utc: {
    offsetSeconds: 0,
  },
};
