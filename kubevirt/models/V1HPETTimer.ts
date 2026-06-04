export interface V1HPETTimer {
  /** Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true. */
  present?: boolean;
  /** TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest. One of "delay", "catchup", "merge", "discard". */
  tickPolicy?: string;
}
