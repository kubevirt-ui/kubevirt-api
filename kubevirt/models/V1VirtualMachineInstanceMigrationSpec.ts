import type { V1VirtualMachineInstanceMigrationSource } from './V1VirtualMachineInstanceMigrationSource';
import type { V1VirtualMachineInstanceMigrationTarget } from './V1VirtualMachineInstanceMigrationTarget';

export interface V1VirtualMachineInstanceMigrationSpec {
  /** AddedNodeSelector is an additional selector that can be used to complement a NodeSelector or NodeAffinity as set on the VM to restrict the set of allowed target nodes for a migration. In case of key collisions, values set on the VM objects are going to be preserved to ensure that addedNodeSelector can only restrict but not bypass constraints already set on the VM object. */
  addedNodeSelector?: Record<string, string>;
  /** Priority of the migration. This can be one of `system-critical`, `user-triggered`, `system-maintenance`. */
  priority?: string;
  /** If receieve is specified, this VirtualMachineInstanceMigration will be considered the target */
  receive?: V1VirtualMachineInstanceMigrationTarget;
  /** If sendTo is specified, this VirtualMachineInstanceMigration will be considered the source */
  sendTo?: V1VirtualMachineInstanceMigrationSource;
  /** The name of the VMI to perform the migration on. VMI must exist in the migration objects namespace */
  vmiName?: string;
}
