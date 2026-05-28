import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1alpha1BackupVolumeInfo } from './V1alpha1BackupVolumeInfo';

export interface V1alpha1BackupCheckpoint {
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  creationTime?: K8sIoApimachineryPkgApisMetaV1Time;
  name?: string;
  /** Volumes lists volumes and their disk targets at backup time */
  volumes?: V1alpha1BackupVolumeInfo[];
}
