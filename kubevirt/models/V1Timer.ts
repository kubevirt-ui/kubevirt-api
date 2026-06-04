import type { V1HPETTimer } from './V1HPETTimer';
import type { V1HypervTimer } from './V1HypervTimer';
import type { V1KVMTimer } from './V1KVMTimer';
import type { V1PITTimer } from './V1PITTimer';
import type { V1RTCTimer } from './V1RTCTimer';

/** Represents all available timers in a vmi. */
export interface V1Timer {
  /** HPET (High Precision Event Timer) - multiple timers with periodic interrupts. */
  hpet?: V1HPETTimer;
  /** Hyperv (Hypervclock) - lets guests read the host’s wall clock time (paravirtualized). For windows guests. */
  hyperv?: V1HypervTimer;
  /** KVM 	(KVM clock) - lets guests read the host’s wall clock time (paravirtualized). For linux guests. */
  kvm?: V1KVMTimer;
  /** PIT (Programmable Interval Timer) - a timer with periodic interrupts. */
  pit?: V1PITTimer;
  /** RTC (Real Time Clock) - a continuously running timer with periodic interrupts. */
  rtc?: V1RTCTimer;
}
