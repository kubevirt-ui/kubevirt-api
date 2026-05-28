import type { V1beta1VirtualMachinePoolSelectionPolicy } from './V1beta1VirtualMachinePoolSelectionPolicy';

export interface V1beta1VirtualMachinePoolProactiveScaleInStrategy {
  /** SelectionPolicy defines the priority in which VM instances are selected for proactive scale-in Defaults to "Random" base policy when no SelectionPolicy is configured */
  selectionPolicy?: V1beta1VirtualMachinePoolSelectionPolicy;
  /** Specifies if and how to preserve the state of the VMs selected during scale-in. Disabled - (Default) all state for VMs selected for scale-in will be deleted. Offline - PVCs for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning time during scale out). Online - PVCs and memory for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning and boot time during scale out). */
  statePreservation?: string;
}
