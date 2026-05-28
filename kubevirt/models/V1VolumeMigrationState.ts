import type { V1StorageMigratedVolumeInfo } from './V1StorageMigratedVolumeInfo';

export interface V1VolumeMigrationState {
  /** MigratedVolumes lists the source and destination volumes during the volume migration */
  migratedVolumes?: V1StorageMigratedVolumeInfo[];
}
