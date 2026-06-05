import type { V1beta1VirtualMachinePoolCondition } from './V1beta1VirtualMachinePoolCondition';

export type V1beta1VirtualMachinePoolStatus = {
  conditions?: V1beta1VirtualMachinePoolCondition[];
  /** Canonical form of the label selector for HPA which consumes it through the scale subresource. */
  labelSelector?: string;
  /** @format int32 */
  readyReplicas?: number;
  /** @format int32 */
  replicas?: number;
} | null;
