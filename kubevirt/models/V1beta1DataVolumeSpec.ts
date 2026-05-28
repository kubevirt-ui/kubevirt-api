import type { K8sIoApiCoreV1PersistentVolumeClaimSpec } from './K8sIoApiCoreV1PersistentVolumeClaimSpec';
import type { V1beta1DataVolumeCheckpoint } from './V1beta1DataVolumeCheckpoint';
import type { V1beta1DataVolumeSource } from './V1beta1DataVolumeSource';
import type { V1beta1DataVolumeSourceRef } from './V1beta1DataVolumeSourceRef';
import type { V1beta1StorageSpec } from './V1beta1StorageSpec';

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
  pvc?: K8sIoApiCoreV1PersistentVolumeClaimSpec;
  /** Source is the src of the data for the requested DataVolume */
  source?: V1beta1DataVolumeSource;
  /** SourceRef is an indirect reference to the source of data for the requested DataVolume */
  sourceRef?: V1beta1DataVolumeSourceRef;
  /** Storage is the requested storage specification */
  storage?: V1beta1StorageSpec;
}
