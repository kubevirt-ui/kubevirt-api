import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';

export interface V1VirtualMachineInstancePhaseTransitionTimestamp {
  /** Phase is the status of the VirtualMachineInstance in kubernetes world. It is not the VirtualMachineInstance status, but partially correlates to it. */
  phase?: string;
  /** PhaseTransitionTimestamp is the timestamp of when the phase change occurred */
  phaseTransitionTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
}
