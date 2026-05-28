import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';
import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1MigrationConfiguration } from './V1MigrationConfiguration';
import type { V1VirtualMachineInstanceMigrationSourceState } from './V1VirtualMachineInstanceMigrationSourceState';
import type { V1VirtualMachineInstanceMigrationTargetState } from './V1VirtualMachineInstanceMigrationTargetState';

export interface V1VirtualMachineInstanceMigrationState {
  /** Indicates that the migration has been requested to abort */
  abortRequested?: boolean;
  /** Indicates the final status of the live migration abortion */
  abortStatus?: string;
  /** Indicates the migration completed */
  completed?: boolean;
  /** The time the migration action ended */
  endTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** Indicates that the migration failed */
  failed?: boolean;
  /** Contains the reason why the migration failed */
  failureReason?: string;
  /** Migration configurations to apply */
  migrationConfiguration?: V1MigrationConfiguration;
  /** The type of migration network, either 'pod' or 'migration' */
  migrationNetworkType?: string;
  /** Name of the migration policy. If string is empty, no policy is matched */
  migrationPolicyName?: string;
  /** The VirtualMachineInstanceMigration object associated with this migration */
  migrationUid?: string;
  /** Lets us know if the vmi is currently running pre or post copy migration */
  mode?: string;
  /** The source node that the VMI originated on */
  sourceNode?: string;
  /** If the VMI being migrated uses persistent features (backend-storage), its source PVC name is saved here */
  sourcePersistentStatePVCName?: string;
  sourcePod?: string;
  /** SourceState contains migration state managed by the source virt handler */
  sourceState?: V1VirtualMachineInstanceMigrationSourceState;
  /** The time the migration action began */
  startTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** The UID of the target attachment pod for hotplug volumes */
  targetAttachmentPodUID?: string;
  /** If the VMI requires dedicated CPUs, this field will hold the dedicated CPU set on the target node */
  targetCPUSet?: number[];
  /** The list of ports opened for live migration on the destination node */
  targetDirectMigrationNodePorts?: Record<string, number>;
  /** TargetMemoryOverhead is the memory overhead of the target virt-launcher pod */
  targetMemoryOverhead?: K8sIoApimachineryPkgApiResourceQuantity;
  /** The target node that the VMI is moving to */
  targetNode?: string;
  /** The address of the target node to use for the migration */
  targetNodeAddress?: string;
  /** The Target Node has seen the Domain Start Event */
  targetNodeDomainDetected?: boolean;
  /** The timestamp at which the target node detects the domain is active */
  targetNodeDomainReadyTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** If the VMI requires dedicated CPUs, this field will hold the numa topology on the target node */
  targetNodeTopology?: string;
  /** If the VMI being migrated uses persistent features (backend-storage), its target PVC name is saved here */
  targetPersistentStatePVCName?: string;
  /** The target pod that the VMI is moving to */
  targetPod?: string;
  /** TargetState contains migration state managed by the target virt handler */
  targetState?: V1VirtualMachineInstanceMigrationTargetState;
}
