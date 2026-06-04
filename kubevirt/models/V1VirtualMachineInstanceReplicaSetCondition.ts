export interface V1VirtualMachineInstanceReplicaSetCondition {
  lastProbeTime?: string | null;
  lastTransitionTime?: string | null;
  message?: string;
  reason?: string;
  /** @default "" */
  status: string;
  /** @default "" */
  type: string;
}
