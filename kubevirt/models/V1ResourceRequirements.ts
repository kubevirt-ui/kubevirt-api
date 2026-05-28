import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

export interface V1ResourceRequirements {
  /** Limits describes the maximum amount of compute resources allowed. Valid resource keys are "memory" and "cpu". */
  limits?: Record<string, K8sIoApimachineryPkgApiResourceQuantity>;
  /** Don't ask the scheduler to take the guest-management overhead into account. Instead put the overhead only into the container's memory limit. This can lead to crashes if all memory is in use on a node. Defaults to false. */
  overcommitGuestOverhead?: boolean;
  /** Requests is a description of the initial vmi resources. Valid resource keys are "memory" and "cpu". */
  requests?: Record<string, K8sIoApimachineryPkgApiResourceQuantity>;
}
