import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1beta1Condition } from './V1beta1Condition';

export type V1beta1VirtualMachineCloneStatus = {
  conditions?: V1beta1Condition[];
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  creationTime?: K8sIoApimachineryPkgApisMetaV1Time;
  phase?: string;
  restoreName?: string;
  snapshotName?: string;
  targetName?: string;
} | null;
