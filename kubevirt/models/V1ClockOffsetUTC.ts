export interface V1ClockOffsetUTC {
  /**
   * OffsetSeconds specifies an offset in seconds, relative to UTC. If set, guest changes to the clock will be kept during reboots and not reset.
   * @format int32
   */
  offsetSeconds?: number;
}
