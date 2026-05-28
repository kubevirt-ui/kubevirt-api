import type { K8sIoApiCoreV1TypedLocalObjectReference } from './K8sIoApiCoreV1TypedLocalObjectReference';
import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

export interface V1beta1VirtualMachineSnapshotSpec {
  deletionPolicy?: string;
  /** This time represents the number of seconds we permit the vm snapshot to take. In case we pass this deadline we mark this snapshot as failed. Defaults to DefaultFailureDeadline - 5min */
  failureDeadline?: K8sIoApimachineryPkgApisMetaV1Duration;
  /**
   * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
   * @default {}
   */
  source: K8sIoApiCoreV1TypedLocalObjectReference;
}
