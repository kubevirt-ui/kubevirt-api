import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

export interface V1MemoryStatus {
  /** GuestAtBoot specifies with how much memory the VirtualMachine intiallly booted with. */
  guestAtBoot?: K8sIoApimachineryPkgApiResourceQuantity;
  /** GuestCurrent specifies how much memory is currently available for the VirtualMachine. */
  guestCurrent?: K8sIoApimachineryPkgApiResourceQuantity;
  /** GuestRequested specifies how much memory was requested (hotplug) for the VirtualMachine. */
  guestRequested?: K8sIoApimachineryPkgApiResourceQuantity;
  /** MemoryOverhead specifies the memory overhead added by the virtualization infrastructure for the virt-launcher pod. */
  memoryOverhead?: K8sIoApimachineryPkgApiResourceQuantity;
}
