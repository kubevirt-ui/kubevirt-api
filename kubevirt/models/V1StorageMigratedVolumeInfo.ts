import type { V1PersistentVolumeClaimInfo } from './V1PersistentVolumeClaimInfo';

/** StorageMigratedVolumeInfo tracks the information about the source and destination volumes during the volume migration */
export interface V1StorageMigratedVolumeInfo {
  /** DestinationPVCInfo contains the information about the destination PVC */
  destinationPVCInfo?: V1PersistentVolumeClaimInfo;
  /** SourcePVCInfo contains the information about the source PVC */
  sourcePVCInfo?: V1PersistentVolumeClaimInfo;
  /**
   * VolumeName is the name of the volume that is being migrated
   * @default ""
   */
  volumeName: string;
}
