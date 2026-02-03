import { V1MigrationConfiguration } from '../models/V1MigrationConfiguration';

export const testObject: V1MigrationConfiguration = {
  allowAutoConverge: true,
  allowPostCopy: false,
  allowWorkloadDisruption: false,
  bandwidthPerMigration: '64Mi',
  completionTimeoutPerGiB: 150,
  disableTLS: false,
  matchSELinuxLevelOnMigration: false,
  network: 'migration-network',
  nodeDrainTaintKey: 'kubevirt.io/drain',
  parallelMigrationsPerCluster: 5,
  parallelOutboundMigrationsPerNode: 2,
  progressTimeout: 150,
  unsafeMigrationOverride: false,
};
