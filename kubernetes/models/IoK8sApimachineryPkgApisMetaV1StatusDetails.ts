import type { IoK8sApimachineryPkgApisMetaV1StatusCause } from './IoK8sApimachineryPkgApisMetaV1StatusCause';

export interface IoK8sApimachineryPkgApisMetaV1StatusDetails {
  /** The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
  causes?: IoK8sApimachineryPkgApisMetaV1StatusCause[];
  /** The group attribute of the resource associated with the status StatusReason. */
  group?: string;
  /** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
  name?: string;
  /**
   * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
   * @format int32
   */
  retryAfterSeconds?: number;
  /** UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids */
  uid?: string;
}
