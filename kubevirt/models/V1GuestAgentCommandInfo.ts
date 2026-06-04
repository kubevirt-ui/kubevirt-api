/** List of commands that QEMU guest agent supports */
export interface V1GuestAgentCommandInfo {
  enabled?: boolean;
  /** @default "" */
  name: string;
}
