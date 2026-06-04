/** Condition defines conditions */
export interface V1Condition {
  lastProbeTime?: string | null;
  lastTransitionTime?: string | null;
  message?: string;
  reason?: string;
  /** @default "" */
  status: string;
  /** @default "" */
  type: string;
}
