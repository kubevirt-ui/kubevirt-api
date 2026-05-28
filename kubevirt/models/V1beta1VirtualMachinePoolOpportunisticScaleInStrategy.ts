export interface V1beta1VirtualMachinePoolOpportunisticScaleInStrategy {
  /** Specifies if and how to preserve the state of the VMs selected during scale-in. Disabled - (Default) all state for VMs selected for scale-in will be deleted. Offline - PVCs for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning time during scale out). Online - PVCs and memory for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning and boot time during scale out). */
  statePreservation?: string;
}
