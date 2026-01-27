import { V1Timer } from '../models/V1Timer';

export const testObject: V1Timer = {
  hpet: {
    present: false,
  },
  hyperv: {
    present: true,
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
};
