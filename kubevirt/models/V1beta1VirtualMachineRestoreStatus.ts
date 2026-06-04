import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1beta1Condition } from './V1beta1Condition';
import type { V1beta1VolumeRestore } from './V1beta1VolumeRestore';

/** VirtualMachineRestoreStatus is the status for a VirtualMachineRestore resource */
export type V1beta1VirtualMachineRestoreStatus = {
  complete?: boolean;
  conditions?: V1beta1Condition[];
  deletedDataVolumes?: string[];
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  restoreTime?: K8sIoApimachineryPkgApisMetaV1Time;
  restores?: V1beta1VolumeRestore[];
} | null;
