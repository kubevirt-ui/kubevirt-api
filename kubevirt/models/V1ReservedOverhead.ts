import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

export interface V1ReservedOverhead {
  /** AddedOverhead determines the memory overhead that will be reserved for the VM. It increases the virt-launcher pod memory limit. */
  addedOverhead?: K8sIoApimachineryPkgApiResourceQuantity;
  /**
   * RequiresLock determines whether the VM's and its overhead memory need to be locked or not. It is a common practice to enable this if vDPA, VFIO or any other specialized hardware that depends on DMA is being used by the VM. False - (Default) memory lock RLimits are not modified. True - Memory lock RLimits will be updated to consider VM memory
   *        size and memory overhead
   */
  memLock?: string;
}
