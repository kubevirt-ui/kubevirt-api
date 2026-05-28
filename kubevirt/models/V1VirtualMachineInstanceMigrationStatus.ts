import type { V1VirtualMachineInstanceMigrationCondition } from './V1VirtualMachineInstanceMigrationCondition';
import type { V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp } from './V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp';
import type { V1VirtualMachineInstanceMigrationState } from './V1VirtualMachineInstanceMigrationState';

export type V1VirtualMachineInstanceMigrationStatus = {
  conditions?: V1VirtualMachineInstanceMigrationCondition[];
  /** Represents the status of a live migration */
  migrationState?: V1VirtualMachineInstanceMigrationState;
  phase?: string;
  /** PhaseTransitionTimestamp is the timestamp of when the last phase change occurred */
  phaseTransitionTimestamps?: V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp[];
  /** The synchronization addresses one can use to connect to the synchronization controller, includes the port, if multiple addresses are available, the first one is reported in the synchronizationAddress field. */
  synchronizationAddresses?: string[];
} | null;
