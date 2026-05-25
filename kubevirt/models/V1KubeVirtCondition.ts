export interface V1KubeVirtCondition {
  lastProbeTime?: string | null;
  lastTransitionTime?: string | null;
  message?: string;
  reason?: string;
  /** @default "" */
  status: string;
  /** @default "" */
  type: string;
}
