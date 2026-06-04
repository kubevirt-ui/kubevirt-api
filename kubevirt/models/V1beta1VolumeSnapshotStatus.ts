import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1beta1Error } from './V1beta1Error';

/** VolumeSnapshotStatus is the status of a VolumeSnapshot */
export interface V1beta1VolumeSnapshotStatus {
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  creationTime?: K8sIoApimachineryPkgApisMetaV1Time;
  /** Error is the last error encountered during the snapshot/restore */
  error?: V1beta1Error;
  readyToUse?: boolean;
  /** @default "" */
  volumeSnapshotName: string;
}
