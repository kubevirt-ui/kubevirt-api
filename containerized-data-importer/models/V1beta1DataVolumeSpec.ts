import type { V1PersistentVolumeClaimSpec } from './V1PersistentVolumeClaimSpec';
import type { V1beta1DataVolumeCheckpoint } from './V1beta1DataVolumeCheckpoint';
import type { V1beta1DataVolumeSource } from './V1beta1DataVolumeSource';
import type { V1beta1DataVolumeSourceRef } from './V1beta1DataVolumeSourceRef';
import type { V1beta1StorageSpec } from './V1beta1StorageSpec';

/** DataVolumeSpec defines the DataVolume type specification */
export interface V1beta1DataVolumeSpec {
  /** Checkpoints is a list of DataVolumeCheckpoints, representing stages in a multistage import. */
  checkpoints?: V1beta1DataVolumeCheckpoint[];
  /** DataVolumeContentType options: "kubevirt", "archive" */
  contentType?: string;
  /** FinalCheckpoint indicates whether the current DataVolumeCheckpoint is the final checkpoint. */
  finalCheckpoint?: boolean;
  /** Preallocation controls whether storage for DataVolumes should be allocated in advance. */
  preallocation?: boolean;
  /** PriorityClassName for Importer, Cloner and Uploader pod */
  priorityClassName?: string;
  /** PVC is the PVC specification */
  pvc?: V1PersistentVolumeClaimSpec;
  /** ServiceAccountName for Importer and Uploader pod */
  serviceAccountName?: string;
  /** Source is the src of the data for the requested DataVolume */
  source?: V1beta1DataVolumeSource;
  /** SourceRef is an indirect reference to the source of data for the requested DataVolume */
  sourceRef?: V1beta1DataVolumeSourceRef;
  /** Storage is the requested storage specification */
  storage?: V1beta1StorageSpec;
}
