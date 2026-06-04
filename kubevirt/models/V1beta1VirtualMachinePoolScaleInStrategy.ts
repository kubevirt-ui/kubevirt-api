import type { V1beta1VirtualMachinePoolOpportunisticScaleInStrategy } from './V1beta1VirtualMachinePoolOpportunisticScaleInStrategy';
import type { V1beta1VirtualMachinePoolProactiveScaleInStrategy } from './V1beta1VirtualMachinePoolProactiveScaleInStrategy';
import type { V1beta1VirtualMachinePoolUnmanagedStrategy } from './V1beta1VirtualMachinePoolUnmanagedStrategy';

/** VirtualMachinePoolScaleInStrategy specifies how the VMPool controller manages scaling in VMs within a VMPool */
export interface V1beta1VirtualMachinePoolScaleInStrategy {
  /** Opportunistic scale-in is a strategy when vms are deleted by some other means than the scale-in action. For example, when the VM is deleted by the user or when the VM is deleted by the node that is hosting the VM. */
  opportunistic?: V1beta1VirtualMachinePoolOpportunisticScaleInStrategy;
  /** Proactive scale-in by forcing VMs to shutdown during scale-in (Default) */
  proactive?: V1beta1VirtualMachinePoolProactiveScaleInStrategy;
  /** The VM is never touched after creation. Users are responsible for scaling in the pool manually. */
  unmanaged?: V1beta1VirtualMachinePoolUnmanagedStrategy;
}
