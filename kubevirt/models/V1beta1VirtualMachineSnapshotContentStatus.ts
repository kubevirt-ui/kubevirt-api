import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1beta1Error } from './V1beta1Error';
import type { V1beta1VolumeSnapshotStatus } from './V1beta1VolumeSnapshotStatus';

/** VirtualMachineSnapshotContentStatus is the status for a VirtualMachineSnapshotStatus resource */
export type V1beta1VirtualMachineSnapshotContentStatus = {
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  creationTime?: K8sIoApimachineryPkgApisMetaV1Time;
  /** Error is the last error encountered during the snapshot/restore */
  error?: V1beta1Error;
  readyToUse?: boolean;
  volumeSnapshotStatus?: V1beta1VolumeSnapshotStatus[];
} | null;
