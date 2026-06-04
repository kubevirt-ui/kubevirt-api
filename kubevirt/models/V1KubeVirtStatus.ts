import type { V1GenerationStatus } from './V1GenerationStatus';
import type { V1KubeVirtCondition } from './V1KubeVirtCondition';

/** KubeVirtStatus represents information pertaining to a KubeVirt deployment. */
export type V1KubeVirtStatus = {
  conditions?: V1KubeVirtCondition[];
  defaultArchitecture?: string;
  generations?: V1GenerationStatus[];
  observedDeploymentConfig?: string;
  observedDeploymentID?: string;
  /** @format int64 */
  observedGeneration?: number;
  observedKubeVirtRegistry?: string;
  observedKubeVirtVersion?: string;
  operatorVersion?: string;
  /** @format int32 */
  outdatedVirtualMachineInstanceWorkloads?: number;
  phase?: string;
  synchronizationAddresses?: string[];
  targetDeploymentConfig?: string;
  targetDeploymentID?: string;
  targetKubeVirtRegistry?: string;
  targetKubeVirtVersion?: string;
} | null;
