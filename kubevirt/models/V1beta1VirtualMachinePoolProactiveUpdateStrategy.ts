import type { V1beta1VirtualMachinePoolSelectionPolicy } from './V1beta1VirtualMachinePoolSelectionPolicy';

/** VirtualMachinePoolProactiveUpdateStrategy represents proactive update strategy */
export interface V1beta1VirtualMachinePoolProactiveUpdateStrategy {
  /** SelectionPolicy defines the priority in which VM instances are selected for proactive update Defaults to "Random" base policy when no SelectionPolicy is configured */
  selectionPolicy?: V1beta1VirtualMachinePoolSelectionPolicy;
}
