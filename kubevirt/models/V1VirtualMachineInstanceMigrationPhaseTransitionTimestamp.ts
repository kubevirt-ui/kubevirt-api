import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';

/** VirtualMachineInstanceMigrationPhaseTransitionTimestamp gives a timestamp in relation to when a phase is set on a vmi */
export interface V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp {
  /** Phase is the status of the VirtualMachineInstanceMigrationPhase in kubernetes world. It is not the VirtualMachineInstanceMigrationPhase status, but partially correlates to it. */
  phase?: string;
  /** PhaseTransitionTimestamp is the timestamp of when the phase change occurred */
  phaseTransitionTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
}
