import type { V1beta1DataImportCronCondition } from './V1beta1DataImportCronCondition';
import type { V1beta1DataVolumeSourcePVC } from './V1beta1DataVolumeSourcePVC';
import type { V1beta1ImportStatus } from './V1beta1ImportStatus';
import type { V1Time } from './V1Time';

export interface V1beta1DataImportCronStatus {
  conditions?: V1beta1DataImportCronCondition[];
  /** CurrentImports are the imports in progress. Currently only a single import is supported. */
  currentImports?: V1beta1ImportStatus[];
  /** LastExecutionTimestamp is the time of the last polling */
  lastExecutionTimestamp?: V1Time;
  /** LastImportTimestamp is the time of the last import */
  lastImportTimestamp?: V1Time;
  /** LastImportedPVC is the last imported PVC */
  lastImportedPVC?: V1beta1DataVolumeSourcePVC;
  /** SourceFormat defines the format of the DataImportCron-created disk image sources */
  sourceFormat?: string;
}
