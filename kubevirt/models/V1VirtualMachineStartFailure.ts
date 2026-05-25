import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';

export interface V1VirtualMachineStartFailure {
  /** @format int32 */
  consecutiveFailCount?: number;
  lastFailedVMIUID?: string;
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  retryAfterTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
}
