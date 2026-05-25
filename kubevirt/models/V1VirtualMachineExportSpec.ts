import type { K8sIoApiCoreV1TypedLocalObjectReference } from './K8sIoApiCoreV1TypedLocalObjectReference';
import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

export interface V1VirtualMachineExportSpec {
  /**
   * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
   * @default {}
   */
  source: K8sIoApiCoreV1TypedLocalObjectReference;
  /** TokenSecretRef is the name of the custom-defined secret that contains the token used by the export server pod */
  tokenSecretRef?: string;
  /** ttlDuration limits the lifetime of an export If this field is set, after this duration has passed from counting from CreationTimestamp, the export is eligible to be automatically deleted. If this field is omitted, a reasonable default is applied. */
  ttlDuration?: K8sIoApimachineryPkgApisMetaV1Duration;
}
