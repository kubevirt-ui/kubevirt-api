import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1beta1Condition } from './V1beta1Condition';
import type { V1beta1Error } from './V1beta1Error';
import type { V1beta1SnapshotVolumesLists } from './V1beta1SnapshotVolumesLists';
import type { V1beta1SourceIndication } from './V1beta1SourceIndication';

/** VirtualMachineSnapshotStatus is the status for a VirtualMachineSnapshot resource */
export type V1beta1VirtualMachineSnapshotStatus = {
  conditions?: V1beta1Condition[];
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  creationTime?: K8sIoApimachineryPkgApisMetaV1Time;
  /** Error is the last error encountered during the snapshot/restore */
  error?: V1beta1Error;
  /** Deprecated: Use SourceIndications instead. This field will be removed in a future version. */
  indications?: string[];
  phase?: string;
  readyToUse?: boolean;
  /** SnapshotVolumesLists includes the list of volumes which were included in the snapshot and volumes which were excluded from the snapshot */
  snapshotVolumes?: V1beta1SnapshotVolumesLists;
  sourceIndications?: V1beta1SourceIndication[];
  sourceUID?: string;
  virtualMachineSnapshotContentName?: string;
} | null;
