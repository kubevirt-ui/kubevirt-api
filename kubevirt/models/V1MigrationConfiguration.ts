import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

export interface V1MigrationConfiguration {
  /** AllowAutoConverge allows the platform to compromise performance/availability of VMIs to guarantee successful VMI live migrations. Defaults to false */
  allowAutoConverge?: boolean;
  /** AllowPostCopy enables post-copy live migrations. Such migrations allow even the busiest VMIs to successfully live-migrate. However, events like a network failure can cause a VMI crash. If set to true, migrations will still start in pre-copy, but switch to post-copy when CompletionTimeoutPerGiB triggers. Defaults to false */
  allowPostCopy?: boolean;
  /** AllowWorkloadDisruption indicates that the migration shouldn't be canceled after acceptableCompletionTime is exceeded. Instead, if permitted, migration will be switched to post-copy or the VMI will be paused to allow the migration to complete */
  allowWorkloadDisruption?: boolean;
  /** BandwidthPerMigration limits the amount of network bandwidth live migrations are allowed to use. The value is in quantity per second. Defaults to 0 (no limit) */
  bandwidthPerMigration?: K8sIoApimachineryPkgApiResourceQuantity;
  /**
   * CompletionTimeoutPerGiB is the maximum number of seconds per GiB a migration is allowed to take. If the timeout is reached, the migration will be either paused, switched to post-copy or cancelled depending on other settings. Defaults to 150
   * @format int64
   */
  completionTimeoutPerGiB?: number;
  /** When set to true, DisableTLS will disable the additional layer of live migration encryption provided by KubeVirt. This is usually a bad idea. Defaults to false */
  disableTLS?: boolean;
  /** By default, the SELinux level of target virt-launcher pods is forced to the level of the source virt-launcher. When set to true, MatchSELinuxLevelOnMigration lets the CRI auto-assign a random level to the target. That will ensure the target virt-launcher doesn't share categories with another pod on the node. However, migrations will fail when using RWX volumes that don't automatically deal with SELinux levels. */
  matchSELinuxLevelOnMigration?: boolean;
  /** Network is the name of the CNI network to use for live migrations. By default, migrations go through the pod network. */
  network?: string;
  /** NodeDrainTaintKey defines the taint key that indicates a node should be drained. Note: this option relies on the deprecated node taint feature. Default: kubevirt.io/drain */
  nodeDrainTaintKey?: string;
  /**
   * ParallelMigrationsPerCluster is the total number of concurrent live migrations allowed cluster-wide. Defaults to 5
   * @format int64
   */
  parallelMigrationsPerCluster?: number;
  /**
   * ParallelOutboundMigrationsPerNode is the maximum number of concurrent outgoing live migrations allowed per node. Defaults to 2
   * @format int64
   */
  parallelOutboundMigrationsPerNode?: number;
  /**
   * ProgressTimeout is the maximum number of seconds a live migration is allowed to make no progress. Hitting this timeout means a migration transferred 0 data for that many seconds. The migration is then considered stuck and therefore cancelled. Defaults to 150
   * @format int64
   */
  progressTimeout?: number;
  /** UnsafeMigrationOverride allows live migrations to occur even if the compatibility check indicates the migration will be unsafe to the guest. Defaults to false */
  unsafeMigrationOverride?: boolean;
  /**
   * UtilityVolumesTimeout is the maximum number of seconds a migration can wait in Pending state for utility volumes to be detached. If utility volumes are still present after this timeout, the migration will be marked as Failed. Defaults to 150
   * @format int64
   */
  utilityVolumesTimeout?: number;
}
