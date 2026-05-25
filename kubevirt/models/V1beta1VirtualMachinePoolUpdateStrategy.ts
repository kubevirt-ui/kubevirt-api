import type { V1beta1VirtualMachineOpportunisticUpdateStrategy } from './V1beta1VirtualMachineOpportunisticUpdateStrategy';
import type { V1beta1VirtualMachinePoolProactiveUpdateStrategy } from './V1beta1VirtualMachinePoolProactiveUpdateStrategy';
import type { V1beta1VirtualMachinePoolUnmanagedStrategy } from './V1beta1VirtualMachinePoolUnmanagedStrategy';

export interface V1beta1VirtualMachinePoolUpdateStrategy {
  /** Opportunistic update only gets applied to the VM, VMI is updated naturally upon the restart. Whereas proactive it applies both the VM and VMI right away. */
  opportunistic?: V1beta1VirtualMachineOpportunisticUpdateStrategy;
  /** Proactive update by forcing the VMs to restart during update */
  proactive?: V1beta1VirtualMachinePoolProactiveUpdateStrategy;
  /** Unmanaged indicates that no automatic update of VMs within a VMPool is performed. When this is set, the VMPool controller will not update the VMs within the pool. */
  unmanaged?: V1beta1VirtualMachinePoolUnmanagedStrategy;
}
