import type { V1VolumeMigrationState } from './V1VolumeMigrationState';

export interface V1VolumeUpdateState {
  /** VolumeMigrationState tracks the information related to the volume migration */
  volumeMigrationState?: V1VolumeMigrationState;
}
