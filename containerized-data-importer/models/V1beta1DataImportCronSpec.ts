import type { V1beta1DataVolume } from './V1beta1DataVolume';

/** DataImportCronSpec defines specification for DataImportCron */
export interface V1beta1DataImportCronSpec {
  /** GarbageCollect specifies whether old PVCs should be cleaned up after a new PVC is imported. Options are currently "Outdated" and "Never", defaults to "Outdated". */
  garbageCollect?: string;
  /**
   * Number of import PVCs to keep when garbage collecting. Default is 3.
   * @format int32
   */
  importsToKeep?: number;
  /**
   * ManagedDataSource specifies the name of the corresponding DataSource this cron will manage. DataSource has to be in the same namespace.
   * @default ""
   */
  managedDataSource: string;
  /** RetentionPolicy specifies whether the created DataVolumes and DataSources are retained when their DataImportCron is deleted. Default is RetainAll. */
  retentionPolicy?: string;
  /**
   * Schedule specifies in cron format when and how often to look for new imports
   * @default ""
   */
  schedule: string;
  /** ServiceAccountName is the name of the ServiceAccount for creating DataVolumes. */
  serviceAccountName?: string;
  /**
   * Template specifies template for the DVs to be created
   * @default {}
   */
  template: V1beta1DataVolume;
}
